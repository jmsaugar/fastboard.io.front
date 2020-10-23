import { isInit } from './utils';
import {
  init, close, join, setUserName, setBoardName,
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
};
