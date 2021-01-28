import { Log } from '#utils';
import { tools } from '#constants';
import store, { setSelectedTool, setToolColor } from '#store';

import {
  injectDependencies, start, stop, addUser, removeUser, exportBoard,
} from './actions';
import {
  onMouseDown,
  onMouseDrag,
  onMouseUp,
  onKeyDown,
  onImageAdded,
  onItem2Back,
  onItem2Front,
  onItemRemoved,
  onBoardCleared,
} from './handlers';

export default () => {
  Log.info('Service : Drawings : create');

  const scope = Object.seal({
    dependencies : {},
    isStarted    : false,
    projects     : {},
    users        : {},
    tools        : {},
  });

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
    onItemRemoved      : onItemRemoved.bind(scope),
    onItem2Front       : onItem2Front.bind(scope),
    onItem2Back        : onItem2Back.bind(scope),
    tools              : {
      // @todo rework this
      [tools.pencil] : {
        activate : () => {
          scope.tools.pencil.activate();
          store.dispatch(setSelectedTool(tools.pencil));
        },
        setColor : (color) => {
          scope.tools.pencil.setColor(color);
          store.dispatch(setToolColor({ tool : tools.pencil, color }));
        },
      },
      [tools.pen] : {
        activate : () => {
          scope.tools.pen.activate();
          store.dispatch(setSelectedTool(tools.pen));
        },
        setColor : (color) => {
          scope.tools.pen.setColor(color);
          store.dispatch(setToolColor({ tool : tools.pen, color }));
        },
      },
      [tools.highlighter] : {
        activate : () => {
          scope.tools.highlighter.activate();
          store.dispatch(setSelectedTool(tools.highlighter));
        },
        setColor : (color) => {
          scope.tools.highlighter.setColor(color);
          store.dispatch(setToolColor({ tool : tools.highlighter, color }));
        },
      },
      [tools.eraser] : {
        activate : () => {
          scope.tools.eraser.activate();
          store.dispatch(setSelectedTool(tools.eraser));
        },
      },
      [tools.pointer] : {
        activate : () => {
          scope.tools.pointer.activate();
          store.dispatch(setSelectedTool(tools.pointer));
        },
      },
      [tools.text] : {
        activate : () => {
          scope.tools.text.activate();
          store.dispatch(setSelectedTool(tools.text));
        },
        setColor : (color) => {
          scope.tools.text.setColor(color);
          store.dispatch(setToolColor({ tool : tools.text, color }));
        },
      },
      [tools.selector] : {
        activate : () => {
          scope.tools.selector.reset();
          scope.tools.selector.activate();
          store.dispatch(setSelectedTool(tools.selector));
        },
        removeItem      : () => scope.tools.selector.removeItem(),
        sendItem2Back   : () => scope.tools.selector.sendItem2Back(),
        bringItem2Front : () => scope.tools.selector.bringItem2Front(),
        reset           : () => scope.tools.selector.reset(),
      },
      [tools.image] : {
        activate : (image) => {
          scope.tools.image.activate(image)
            .then((itemName) => {
              scope.tools.selector.activate(itemName);
              store.dispatch(setSelectedTool(tools.selector));
            });
        },
      },
      [tools.clear] : {
        activate : () => scope.tools.clear.activate(),
      },
    },
  });
};
