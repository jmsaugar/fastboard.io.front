import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { mainLayoutId, boardsErrors } from '#constants';
import {
  BoardWelcome, Canvas, Modal, ToolBar,
} from '#components';
import { boardsService, drawingsService } from '#services';
import store, { setBoardName, setMyUserName, setUsers } from '#store';

import SWrapper from './styled';

const CANVAS_ID = 'canvas';

// @ todo check params.id
const Board = () => {
  const { id : boardId } = useParams();
  const [showWelcome, setShowWelcome] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!boardsService.isInit()) {
      setShowWelcome(true);
    }

    return () => {
      boardsService.close();
      drawingsService.close();
    };
  }, [boardId, setShowWelcome]);

  const join = useCallback(
    (userName) => {
      setIsLoading(true);

      boardsService.init();
      boardsService.join({
        boardId,
        userName,
      })
        .then(({ boardName, users }) => {
          store.dispatch(setBoardName(boardName));
          store.dispatch(setMyUserName(userName));
          store.dispatch(setUsers(users));

          drawingsService.init(CANVAS_ID);

          setShowWelcome(false);
          setIsLoading(false);
        })
        .catch((error) => console.log(error.name, error.message)); // @todo error
    },
    [boardId],
  );

  const cancel = () => {}; // @todo return to home?

  return (
    <SWrapper>
      <ToolBar />
      <Canvas id={CANVAS_ID} />
      <Modal target={mainLayoutId} show={showWelcome}>
        <BoardWelcome
          isLoading={isLoading}
          boardId={boardId}
          onJoin={join}
          onCancel={cancel}
        />
      </Modal>
    </SWrapper>
  );
};

export default Board;
