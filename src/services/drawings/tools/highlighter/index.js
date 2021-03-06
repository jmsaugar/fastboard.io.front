import { Tool } from 'paper';

import { Log, throttle, noop } from '#utils';
import {
  drawingColorCodes, defaultDrawingColor, drawingsMessages, tools,
} from '#constants';

import activate from './activate';
import setColor from './setColor';
import onMouseDown from './onMouseDown';
import onMouseDrag from './onMouseDrag';
import onMouseUp from './onMouseUp';

const throttleDelay = 5; // In milliseconds

export default (dependencies) => {
  Log.info('Service : Drawings : Tools : Highlighter : create');

  const scope = {
    dependencies : {
      realtimeService : dependencies?.realtimeService,
      projects        : {
        drawings : dependencies?.drawingsProject,
        map      : dependencies?.mapProject,
      },
    },
    tool        : new Tool(),
    strokeColor : drawingColorCodes[defaultDrawingColor],
    currentPath : {
      drawings : undefined,
      map      : undefined,
    },
  };

  // @todo rework this? also, events to constants
  scope.tool.on('mousedown', (event) => {
    Log.debug('Highlighter : onMouseDown');

    const drawingData = onMouseDown.call(scope, event);

    if (drawingData) {
      dependencies.realtimeService.send(
        drawingsMessages.doMouseDown,
        { tool : tools.highlighter, ...drawingData },
      ).catch(noop); // @todo decide what to do with those cases
    }
  });

  scope.tool.on('mousedrag', throttle(
    (event) => {
      const drawingData = onMouseDrag.call(scope, event);

      if (drawingData) {
        dependencies.realtimeService.send(
          drawingsMessages.doMouseDrag,
          { tool : tools.highlighter, ...drawingData },
        ).catch(noop); // @todo decide what to do with those cases
      }
    },
    throttleDelay,
  ));

  scope.tool.on('mouseup', () => {
    Log.debug('Highlighter : onMouseUp');

    onMouseUp.call(scope);
    dependencies.realtimeService.send(
      drawingsMessages.doMouseUp,
      { tool : tools.highlighter },
    ).catch(noop); // @todo decide what to do with those cases
  });

  return Object.freeze({
    setColor    : setColor.bind(scope),
    activate    : activate.bind(scope),
    onMouseDown : onMouseDown.bind(scope),
    onMouseDrag : onMouseDrag.bind(scope),
    onMouseUp   : onMouseUp.bind(scope),
  });
};
