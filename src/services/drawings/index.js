import { Log } from '#utils';
import { tools } from '#constants';

import {
  injectDependencies, start, stop, addUser, removeUser,
} from './actions';
import {
  onMouseDown, onMouseDrag, onToolSet,
} from './handlers';

export default () => {
  Log.info('Services : Drawings : create');

  const scope = {
    dependencies : {},
    isStarted    : false,
    project      : undefined,
    users        : {},
    tools        : {},
  };

  return Object.freeze({
    injectDependencies : injectDependencies.bind(scope),
    start              : start.bind(scope),
    stop               : stop.bind(scope),
    addUser            : addUser.bind(scope),
    removeUser         : removeUser.bind(scope),
    onMouseDown        : onMouseDown.bind(scope),
    onMouseDrag        : onMouseDrag.bind(scope),
    onToolSet          : onToolSet.bind(scope),
    tools              : {
      [tools.pencil] : {
        activate : () => {
          scope.tools.pencil.activate();
          scope.dependencies.realtimeService.send('doSetTool', { tool : 'pencil' })
            .catch(() => {}); // @todo
        },
        setColor : (color) => scope.tools.pencil.setColor(color),
      },
    },
  });
};
