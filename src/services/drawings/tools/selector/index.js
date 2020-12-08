import { Tool } from 'paper';

import { Log, throttle } from '#utils';
import { drawingsMessages, tools } from '#constants';

import activate from './activate';
import onMouseDown from './onMouseDown';
import onMouseDrag from './onMouseDrag';

const throttleDelay = 5; // In milliseconds

export default (dependencies) => {
  Log.info('Services : Drawings : Tools : Selector : create');

  // @todo freeze/seal other scope objects
  const scope = Object.seal({
    dependencies : {
      realtimeService : dependencies?.realtimeService,
      project         : dependencies?.project,
    },
    tool                    : new Tool(),
    selectedItem            : undefined,
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

  return Object.freeze({
    activate    : activate.bind(scope),
    onMouseDown : onMouseDown.bind(scope),
    onMouseDrag : onMouseDrag.bind(scope),
  });
};
