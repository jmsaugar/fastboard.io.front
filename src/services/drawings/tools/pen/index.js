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
  Log.info('Services : Drawings : Tools : Pen : create');

  const scope = {
    dependencies : {
      realtimeService : dependencies?.realtimeService,
    },
    tool        : new Tool(),
    strokeColor : drawingColorCodes[defaultDrawingColor],
    currentPath : undefined,
  };

  scope.tool.on('mousedown', (event) => {
    Log.debug('Pen : onMouseDown');

    dependencies.realtimeService.send(
      drawingsMessages.doMouseDown,
      {
        tool : tools.pen,
        ...onMouseDown.call(scope, event),
      },
    ).catch(() => {}); // @todo;
  });

  scope.tool.on('mousedrag', throttle(
    (event) => {
      Log.debug('Pen : onMouseDrag');

      dependencies.realtimeService.send(
        drawingsMessages.doMouseDrag,
        {
          tool : tools.pen,
          ...onMouseDrag.call(scope, event),
        },
      ).catch(() => {}); // @todo;
    },
    throttleDelay,
  ));

  scope.tool.on('mouseup', () => {
    Log.debug('Pen : onMouseUp');

    onMouseUp.call(scope);
    dependencies.realtimeService.send(
      drawingsMessages.doMouseUp,
      {
        tool : tools.pen,
      },
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
