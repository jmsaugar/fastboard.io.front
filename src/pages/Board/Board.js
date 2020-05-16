import React, { useEffect } from 'react';

import { boardsService } from '../../services';

// @ todo check params.id
const Board = ({ match }) => {
  useEffect(() => {
    boardsService.init();
    boardsService.join(match.params.id);
  
    return () => boardsService.close();
  }, []);

  return (
    <div>Board</div>
  );
};

export default Board;
