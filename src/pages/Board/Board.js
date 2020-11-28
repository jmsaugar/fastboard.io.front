import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Log, setPreventUnload } from '#utils';
import routes from '#routes';
import { mainLayoutId } from '#constants';
import {
  BoardError, BoardCreatedWelcome, BoardJoinedWelcome, Canvas, Modal, NotificationsList, ToolBar,
} from '#components';
import { boardsService, drawingsService, realtimeService } from '#services';
import { isJoinedSelector, setJoined, setUnjoined } from '#store';

import SWrapper from './styled';

const canvasId = 'canvas';

const modalSteps = Object.freeze({
  none    : 0,
  created : 1,
  joined  : 2,
  error   : 3,
});


// @ todo check params.id
const Board = () => {
  const { push : redirectTo, block } = useHistory();
  const { id : boardId } = useParams();
  const dispatch = useDispatch();
  const isJoined = useSelector(isJoinedSelector);
  const [isLoading, setIsLoading] = useState(false);
  const [modalStep, setModalStep] = useState(modalSteps.none);
  const [errorCode, setErrorCode] = useState();

  // Page unload prevention
  useEffect(() => {
    const unblock = block(() => {
      return window.confirm('leave?'); // @todo text and ¿custom modal?
    });

    setPreventUnload(true);

    return () => {
      unblock();
      setPreventUnload(false);
    };
  }, [block]);

  // Already joined vs joining pending logic
  useEffect(() => {
    if (isJoined) {
      setModalStep(modalSteps.created);
      drawingsService.start(canvasId);
    } else {
      setModalStep(modalSteps.joined);
    }
  }, [isJoined]);

  // Leaving logic
  useEffect(() => () => {
    dispatch(setUnjoined());
    realtimeService.stop();
    drawingsService.stop();
  }, [dispatch]);

  const join = useCallback(
    (userName) => {
      Log.debug('Component : Board : join', { boardId, userName });

      setIsLoading(true);

      realtimeService.start();
      boardsService.join(boardId, userName)
        .then(({ boardId : joinedBoardId, boardName, users }) => {
          Log.debug('Component : Board : join : joined', { joinedBoardId, boardName, users });

          dispatch(setJoined({ boardName, userName, users }));

          setModalStep(modalSteps.none);
          setIsLoading(false);
          drawingsService.start(canvasId);
        })
        .catch(({ message }) => {
          // @todo stop services?
          setModalStep(modalSteps.error);
          setErrorCode(message);
        });
    },
    [boardId, dispatch, setErrorCode, setModalStep, setIsLoading],
  );

  const goHome = () => redirectTo(routes.home);

  return (
    <SWrapper>
      <ToolBar />
      <Canvas id={canvasId} />
      <Modal target={mainLayoutId} show={modalStep !== modalSteps.none}>
        {modalStep === modalSteps.created && (
          <BoardCreatedWelcome
            boardId={boardId}
            onClose={() => setModalStep(modalSteps.none)}
          />
        )}
        {modalStep === modalSteps.joined && (
          <BoardJoinedWelcome
            isLoading={isLoading}
            boardId={boardId}
            onJoin={join}
            onCancel={goHome}
          />
        )}
        {modalStep === modalSteps.error && (
          <BoardError code={errorCode} onClose={goHome} />
        )}
      </Modal>
      <NotificationsList />
    </SWrapper>
  );
};

export default Board;
