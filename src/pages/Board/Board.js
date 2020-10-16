import React, { useEffect } from 'react';

import { Canvas, ToolBar } from '../../components';

import { boardsService, drawingsService } from '../../services';

import SWrapper from './styled';

const CANVAS_ID = 'canvas';

// @ todo check params.id
const Board = ({ match }) => {
  useEffect(() => {
    // boardsService.init();
    // boardsService.join(match.params.id);
    // drawingsService.init(CANVAS_ID);

    // return () => {
    //   boardsService.close();
    //   drawingsService.close();
    // };
  }, [match.params.id]);

  return (
    <SWrapper>
      {/* <ToolBar />
      <Canvas id={CANVAS_ID} /> */}
    </SWrapper>
  );
};

export default Board;
