import React, { useEffect } from 'react';

import { Canvas, ToolBar } from '../../components';

import { boardsService, drawingsService } from '../../services';

import SWrapper from './styled';

const CANVAS_ID = 'canvas';

// @ todo check params.id
const Board = ({ match }) => {
  useEffect(() => {
    boardsService.init();
    boardsService.join(match.params.id)
      .then(() => drawingsService.init(CANVAS_ID)) // @todo loading state
      .catch(); // @todo error

    return () => {
      boardsService.close();
      drawingsService.close();
    };
  }, [match.params.id]);

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
