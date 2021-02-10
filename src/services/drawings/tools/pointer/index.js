import { Tool } from 'paper';

import { Log, throttle, noop } from '#utils';

import { drawingsMessages, tools } from '#constants';

import activate from './activate';
import onMouseDown from './onMouseDown';
import onMouseDrag from './onMouseDrag';
import onMouseUp from './onMouseUp';

const throttleDelay = 5; // In milliseconds

export default (dependencies) => {
  Log.info('Service : Drawings : Tools : Pointer : create');

  const scope = {
    dependencies : {
      realtimeService : dependencies?.realtimeService,
      projects        : {
        drawings : dependencies?.drawingsProject,
      },
    },
    tool        : new Tool(),
    currentPath : undefined,
    interval    : undefined,
  };

  scope.tool.on('mousedown', (event) => {
    Log.debug('Pointer : onMouseDown');

    const drawingData = onMouseDown.call(scope, event);

    if (drawingData) {
      dependencies.realtimeService.send(
        drawingsMessages.doMouseDown,
        { tool : tools.pointer, ...drawingData },
      ).catch(noop); // @todo decide what to do with those cases
    }
  });

  scope.tool.on('mousedrag', throttle(
    (event) => {
      const drawingData = onMouseDrag.call(scope, event);

      if (drawingData) {
        dependencies.realtimeService.send(
          drawingsMessages.doMouseDrag,
          { tool : tools.pointer, ...drawingData },
        ).catch(noop); // @todo decide what to do with those cases
      }
    },
    throttleDelay,
  ));

  scope.tool.on('mouseup', () => {
    Log.debug('Pointer : onMouseUp');

    onMouseUp.call(scope);
    dependencies.realtimeService.send(
      drawingsMessages.doMouseUp,
      { tool : tools.pointer },
    ).catch(noop); // @todo decide what to do with those cases
  });

  return Object.freeze({
    activate    : activate.bind(scope),
    onMouseDown : onMouseDown.bind(scope),
    onMouseDrag : onMouseDrag.bind(scope),
    onMouseUp   : onMouseUp.bind(scope),
  });
};
