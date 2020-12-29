import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Log, setPreventUnload } from '#utils';
import routes from '#routes';
import { mainLayoutId } from '#constants';
import {
  BoardError,
  BoardCreatedWelcome,
  BoardJoinedWelcome,
  Canvas,
  HeadMeta,
  Modal,
  NotificationsList,
  ToolBar,
} from '#components';
import {
  boardsService, drawingsService, realtimeService, urlsService,
} from '#services';
import {
  boardNameSelector, isJoinedSelector, isOwnerSelector, setJoined, setUnjoined,
} from '#store';

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
  const { state : routeState } = useLocation();
  const { id : boardId } = useParams();
  const dispatch = useDispatch();
  const boardName = useSelector(boardNameSelector);
  const isOwner = useSelector(isOwnerSelector);
  const isJoined = useSelector(isJoinedSelector);
  const isOwnerOnLoad = useRef(isOwner);
  const isJoinedOnLoad = useRef(isJoined);
  const [isLoading, setIsLoading] = useState(false);
  const [modalStep, setModalStep] = useState(modalSteps.none);
  const [errorCode, setErrorCode] = useState();

  // Joining logic
  const join = useCallback(
    (userName) => {
      Log.debug('Component : Board : join', { boardId, userName });

      setIsLoading(true);

      realtimeService.start();
      boardsService.join(boardId, userName)
        .then(({ boardId : joinedBoardId, boardName : joinedBoardName, users }) => {
          Log.debug('Component : Board : join : joined', { joinedBoardId, joinedBoardName, users });

          drawingsService.start(canvasId);
          dispatch(setJoined({ boardName : joinedBoardName, userName, users }));

          setModalStep(modalSteps.none);
          setIsLoading(false);
        })
        .catch(({ message }) => {
          // @todo stop services?
          setModalStep(modalSteps.error);
          setErrorCode(message);
        });
    },
    [boardId, dispatch, setErrorCode, setModalStep, setIsLoading],
  );

  // Leaving logic
  useEffect(() => () => {
    dispatch(setUnjoined());
    realtimeService.stop();
    drawingsService.stop();
    urlsService.revokeAll();
  }, [dispatch]);

  // Already joined vs joining pending logic
  useEffect(() => {
    if (isJoinedOnLoad.current) {
      // User came from home page - create board
      drawingsService.start(canvasId);

      if (isOwnerOnLoad.current) {
        setModalStep(modalSteps.created);
      }
    } else if (routeState?.userName) {
      // User came from home page - join board
      join(routeState?.userName);
    } else {
      // User came directly to the board page
      setModalStep(modalSteps.joined);
    }
  }, [join, routeState]);

  // Page unload prevention
  useEffect(() => {
    const unblock = block(() => window.confirm('leave?')); // @todo text and ¿custom modal);

    setPreventUnload(true);

    return () => {
      unblock();
      setPreventUnload(false);
    };
  }, [block]);

  const goHome = () => redirectTo(routes.home);

  return (
    <>
      <HeadMeta
        route={routes.board}
        boardId={boardId}
        boardName={boardName}
      />
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
    </>
  );
};

export default Board;
