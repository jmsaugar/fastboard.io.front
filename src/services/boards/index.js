import { Log } from '#utils';

import {
  injectDependencies, create, join, setUserName, setBoardName,
} from './actions';
import {
  onDidJoin, onDidLeave, onDidSetUserName, onDidSetBoardName,
} from './handlers';

export default () => {
  Log.info('Services : Boards : create');

  const scope = {
    dependencies : {},
  };

  return Object.freeze({
    injectDependencies : injectDependencies.bind(scope),
    create             : create.bind(scope),
    join               : join.bind(scope),
    setUserName        : setUserName.bind(scope),
    setBoardName       : setBoardName.bind(scope),
    onDidJoin          : onDidJoin.bind(scope),
    onDidLeave         : onDidLeave.bind(scope),
    onDidSetUserName   : onDidSetUserName.bind(scope),
    onDidSetBoardName  : onDidSetBoardName.bind(scope),
  });
};
