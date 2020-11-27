import { Log } from '#utils';
import { tools } from '#constants';

import {
  injectDependencies, start, stop, addUser, removeUser, exportBoard,
} from './actions';
import {
  onMouseDown, onMouseDrag, onMouseUp, onKeyDown, onImageAdded, onBoardCleared,
} from './handlers';

// @todo http://paperjs.org/examples/path-simplification/

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
    exportBoard        : exportBoard.bind(scope),
    onMouseDown        : onMouseDown.bind(scope),
    onMouseDrag        : onMouseDrag.bind(scope),
    onMouseUp          : onMouseUp.bind(scope),
    onKeyDown          : onKeyDown.bind(scope),
    onImageAdded       : onImageAdded.bind(scope),
    onBoardCleared     : onBoardCleared.bind(scope),
    tools              : {
      // @todo rework this
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
      [tools.text] : {
        activate : () => scope.tools.text.activate(),
        setColor : (color) => scope.tools.text.setColor(color),
      },
      [tools.selector] : {
        activate : () => scope.tools.selector.activate(),
      },
      [tools.image] : {
        activate : (image) => scope.tools.image.activate(image),
      },
      [tools.clear] : {
        activate : () => scope.tools.clear.activate(),
      },
    },
  });
};
