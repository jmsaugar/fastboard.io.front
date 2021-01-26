import { Tool } from 'paper';

import { Log, throttle } from '#utils';
import { drawingsMessages, tools } from '#constants';
import store, { setSelectorCursorOperation } from '#store';

import activate from './activate';
import onMouseDown from './onMouseDown';
import onMouseDrag from './onMouseDrag';
import onOperationStart from './onOperationStart';

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

    const operationData = onMouseDown.call(scope, event);

    if (operationData) {
      dependencies.realtimeService.send(
        drawingsMessages.doMouseDown,
        {
          tool : tools.selector,
          ...operationData,
        },
      ).catch(() => {}); // @todo;
    }
  });

  scope.tool.on('mousedrag', throttle(
    (event) => {
      Log.debug('Selector : onMouseDrag');

      const operationData = onMouseDrag.call(scope, event);

      if (operationData) {
        dependencies.realtimeService.send(
          drawingsMessages.doMouseDrag,
          {
            tool : tools.selector,
            ...operationData,
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
    activate    : activate.bind(scope),
    onMouseDown : onOperationStart.bind(scope),
    onMouseDrag : onMouseDrag.bind(scope),
  });
};
