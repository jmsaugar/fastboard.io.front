import { Tool } from 'paper';

import { Log, throttle } from '#utils';
import { drawingsMessages, tools } from '#constants';
import store, { setSelectorCursorOperation } from '#store';

import activate from './activate';
import onMouseDown from './onMouseDown';
import onMouseDrag from './onMouseDrag';
import onOperationStart from './onOperationStart';
import removeItem from './removeItem';
import onItemRemoved from './onItemRemoved';
import sendItem2Back from './sendItem2Back';
import onItem2Back from './onItem2Back';
import bringItem2Front from './bringItem2Front';
import onItem2Front from './onItem2Front';

const throttleDelay = 5; // In milliseconds

export default (dependencies) => {
  Log.info('Service : Drawings : Tools : Selector : create');

  // @todo freeze/seal other scope objects
  const scope = Object.seal({
    dependencies : {
      realtimeService : dependencies?.realtimeService,
      projects        : {
        drawings : dependencies?.drawingsProject,
        map      : dependencies?.mapProject,
      },
    },
    tool         : new Tool(),
    selectedItem : {
      drawings : undefined,
      map      : undefined,
    },
    selectedItemHandlers    : undefined,
    operation               : undefined,
    currentTranslationPoint : undefined,
    currentRotationAngle    : undefined,
    resizeOriginBound       : undefined,
  });

  scope.tool.on('mousedown', (event) => {
    Log.debug('Selector : onMouseDown');

    const drawingData = onMouseDown.call(scope, event);

    if (drawingData) {
      dependencies.realtimeService.send(
        drawingsMessages.doMouseDown,
        {
          tool : tools.selector,
          ...drawingData,
        },
      ).catch(() => {}); // @todo;
    }
  });

  scope.tool.on('mousedrag', throttle(
    (event) => {
      Log.debug('Selector : onMouseDrag');

      const drawingData = onMouseDrag.call(scope, event);

      if (drawingData) {
        dependencies.realtimeService.send(
          drawingsMessages.doMouseDrag,
          {
            tool : tools.selector,
            ...drawingData,
          },
        ).catch(() => {}); // @todo;
      }
    },
    throttleDelay,
  ));

  scope.tool.on(
    'mouseup',
    () => store.dispatch(setSelectorCursorOperation()),
  );

  return Object.freeze({
    activate        : activate.bind(scope),
    onMouseDown     : onOperationStart.bind(scope),
    onMouseDrag     : onMouseDrag.bind(scope),
    removeItem      : removeItem.bind(scope),
    onItemRemoved   : onItemRemoved.bind(scope),
    sendItem2Back   : sendItem2Back.bind(scope),
    onItem2Back     : onItem2Back.bind(scope),
    bringItem2Front : bringItem2Front.bind(scope),
    onItem2Front    : onItem2Front.bind(scope),
  });
};
