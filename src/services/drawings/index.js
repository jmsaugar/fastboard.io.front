import { tools } from '../../constants';

import boardsService from '../boards';

import { init, close } from './actions';
import { pencilTool, eraserTool } from './tools';

const serviceScope = {
  isInit  : false,
  project : undefined,
};

export default {
  init  : init.bind(serviceScope),
  close : close.bind(serviceScope),
  tools : {
    [tools.pencil] : {
      activate : () => {
        boardsService.setTool(tools.pencil);
        pencilTool.activate();
      },
    },
    [tools.eraser] : {
      activate : () => {
        boardsService.setTool(tools.eraser);
        eraserTool.activate.bind(eraserTool);
      },
    },
  },
};
