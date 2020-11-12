import { Log } from '#utils';
import { tools } from '#constants';

import {
  injectDependencies, start, stop, addUser, removeUser,
} from './actions';
import {
  onMouseDown, onMouseDrag,
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
    tools              : {
      [tools.pencil] : {
        activate : () => scope.tools.pencil.activate(),
        setColor : (color) => scope.tools.pencil.setColor(color),
      },
      [tools.pen] : {
        activate : () => scope.tools.pen.activate(),
        setColor : (color) => scope.tools.pen.setColor(color),
      },
      [tools.highlighter] : {
        activate : () => scope.tools.highlighter.activate(),
        setColor : (color) => scope.tools.highlighter.setColor(color),
      },
      [tools.eraser] : {
        activate : () => scope.tools.eraser.activate(),
      },
      [tools.pointer] : {
        activate : () => scope.tools.pointer.activate(),
      },
    },
  });
};
