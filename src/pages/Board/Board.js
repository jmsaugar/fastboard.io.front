import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Log } from '#utils';
import routes from '#routes';
import { mainLayoutId, boardsErrors } from '#constants';
import {
  BoardError, BoardWelcome, Canvas, Modal, ToolBar,
} from '#components';
import { boardsService, drawingsService } from '#services';
import {
  setJoined, setBoardName, setMyUserName, setUsers,
} from '#store';

import SWrapper from './styled';

const CANVAS_ID = 'canvas';

const modalSteps = Object.freeze({
  none    : 0,
  welcome : 1,
  error   : 2,
});

// @ todo check params.id
const Board = () => {
  const { push : redirectTo } = useHistory();
  const { id : boardId } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [modalStep, setModalStep] = useState(modalSteps.none);
  const [errorCode, setErrorCode] = useState();

  useEffect(() => {
    if (!boardsService.isInit()) {
      setModalStep(modalSteps.welcome);
    }

    return () => {
      dispatch(setJoined(false));
      boardsService.close();
      drawingsService.close();
    };
  }, [boardId, setModalStep, dispatch]);

  const join = useCallback(
    (userName) => {
      Log.debug('Component : Board : join', { boardId, userName });

      setIsLoading(true);

      boardsService.init();
      boardsService.join(boardId, userName)
        .then(({ boardId : joinedBoardId, boardName, users }) => {
          Log.debug('Component : Board : join : joined', { joinedBoardId, boardName, users });

          dispatch(setJoined(true)); // @todo add boardName, username and users list to this action
          dispatch(setBoardName(boardName));
          dispatch(setMyUserName(userName));
          dispatch(setUsers(users));

          drawingsService.init(CANVAS_ID);

          setModalStep(modalSteps.none);
          setIsLoading(false);
        })
        .catch(({ message }) => {
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
      <Canvas id={CANVAS_ID} />
      <Modal target={mainLayoutId} show={modalStep !== modalSteps.none}>
        {modalStep === modalSteps.welcome && (
          <BoardWelcome
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
    </SWrapper>
  );
};

export default Board;
