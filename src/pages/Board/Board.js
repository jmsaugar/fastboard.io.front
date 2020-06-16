import React, { useEffect } from 'react';

import { boardsService, drawingsService } from '../../services';

const CANVAS_ID = 'canvas';

// @ todo check params.id
const Board = ({ match }) => {
  useEffect(() => {
    boardsService.init();
    boardsService.join(match.params.id);
    drawingsService.init(CANVAS_ID);

    return () => {
      boardsService.close();
      drawingsService.close();
    };
  }, []);

  return <canvas id={CANVAS_ID} style={{ width: '100%', height: '100%' }} />;
};

export default Board;
