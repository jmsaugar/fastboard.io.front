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
    pencil : { activate : pencilTool.activate.bind(pencilTool) },
    eraser : { activate : eraserTool.activate.bind(eraserTool) },
  },
};
