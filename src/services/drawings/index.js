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
    pencil : { activate : () => {
      boardsService.setTool('pencil');
      pencilTool.activate();
    } },
    eraser : { activate : eraserTool.activate.bind(eraserTool) },
  },
};
