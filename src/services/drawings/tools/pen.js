import { Path, Tool } from 'paper';

import { Log, throttle } from '#utils';
import { drawingsMessages, tools } from '#constants';

const throttleDelay = 5; // In milliseconds
const strokeWidth = 5;

function setColor(color) {
  Log.debug('Services : Drawings : Tools : Pen : setColor', { color });

  this.strokeColor = color;
}

function activate() {
  Log.debug('Services : Drawings : Tools : Pen : activate');

  this.tool.activate();
}

function onMouseDown(event) {
  Log.debug('Services : Drawings : Tools : Pen : onMouseDown', { event });

  // Data required by the event
  const point = {
    x : event.point.x,
    y : event.point.y,
  };

  const strokeColor = event.strokeColor || this.strokeColor;

  this.currentPath = new Path({
    strokeColor,
    strokeWidth,
  });

  this.currentPath.add(point);

  return { point, strokeColor };
}

function onMouseDrag(event) {
  // Data required by the event
  const point = {
    x : event.point.x,
    y : event.point.y,
  };

  this.currentPath.add(point);

  return { point };
}

export default (dependencies) => {
  Log.info('Services : Drawings : Tools : Pen : create');

  const scope = {
    dependencies : {
      realtimeService : dependencies?.realtimeService,
    },
    tool        : new Tool(),
    strokeColor : 'black', // @todo
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

  return Object.freeze({
    setColor    : setColor.bind(scope),
    activate    : activate.bind(scope),
    onMouseDown : onMouseDown.bind(scope),
    onMouseDrag : onMouseDrag.bind(scope),
  });
};
