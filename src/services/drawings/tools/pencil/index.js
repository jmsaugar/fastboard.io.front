import { Tool } from 'paper';

import { Log, throttle } from '#utils';
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
  Log.info('Service : Drawings : Tools : Pencil : create');

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

  scope.tool.on('mousedown', (event) => {
    Log.debug('Pencil : onMouseDown');

    const drawingData = onMouseDown.call(scope, event);

    if (drawingData) {
      dependencies.realtimeService.send(
        drawingsMessages.doMouseDown,
        { tool : tools.pencil, ...drawingData },
      ).catch(() => {}); // @todo;
    }
  });

  scope.tool.on('mousedrag', throttle(
    (event) => {
      Log.debug('Pencil : onMouseDrag');

      const drawingData = onMouseDrag.call(scope, event);

      if (drawingData) {
        dependencies.realtimeService.send(
          drawingsMessages.doMouseDrag,
          { tool : tools.pencil, ...drawingData },
        ).catch(() => {}); // @todo;
      }
    },
    throttleDelay,
  ));

  scope.tool.on('mouseup', () => {
    Log.debug('Pencil : onMouseUp');

    onMouseUp.call(scope);
    dependencies.realtimeService.send(
      drawingsMessages.doMouseUp,
      { tool : tools.pencil },
    ).catch(() => {}); // @todo;
  });

  return Object.freeze({
    setColor    : setColor.bind(scope),
    activate    : activate.bind(scope),
    onMouseDown : onMouseDown.bind(scope),
    onMouseDrag : onMouseDrag.bind(scope),
    onMouseUp   : onMouseUp.bind(scope),
  });
};
