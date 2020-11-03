import { isInit, send } from './utils';
import {
  init, close, join, setUserName, setBoardName, setTool,
} from './actions';

const serviceScope = {
  isInit : false,
  socket : undefined,
};

export default {
  isInit       : isInit.bind(serviceScope),
  init         : init.bind(serviceScope),
  close        : close.bind(serviceScope),
  join         : join.bind(serviceScope),
  setUserName  : setUserName.bind(serviceScope),
  setBoardName : setBoardName.bind(serviceScope),
  setTool      : setTool.bind(serviceScope),
  send         : send.bind(serviceScope), // @todo probably not export this
};
