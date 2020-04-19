import React, { useEffect } from 'react';

import { boardsService } from '../../services';

const Board = () => {
  useEffect(() => {
    boardsService.init();

    return () => boardsService.close();
  }, []);

  return (
    <div>Board</div>
  );
};

export default Board;
