import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Canvas, ToolBar } from '../../components';

import { boardsService, drawingsService } from '../../services';

import SWrapper from './styled';

const CANVAS_ID = 'canvas';

// @ todo check params.id
const Board = () => {
  const { id : boardId } = useParams();

  useEffect(() => {
    if (!boardsService.isInit()) {
      boardsService.init();
      boardsService.join({
        boardId,
        userName : '#userName#',
      })
        .then(() => drawingsService.init(CANVAS_ID)) // @todo loading state
        .catch(); // @todo error
    }

    return () => {
      boardsService.close();
      drawingsService.close();
    };
  }, [boardId]);

  return (
    <SWrapper>
      <button onClick={() => boardsService.setUserName('new user name')}>
        set user name
      </button>
      <button onClick={() => boardsService.setBoardName('new board name')}>
        set board name
      </button>
      <ToolBar />
      <Canvas id={CANVAS_ID} />
    </SWrapper>
  );
};

export default Board;
