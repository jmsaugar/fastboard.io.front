import { Path, Tool } from 'paper';

import { Log, throttle } from '#utils';
import { drawingsMessages, tools } from '#constants';

const throttleDelay = 5; // In milliseconds
const strokeWidth = 2;

function setColor(color) {
  Log.debug('Services : Drawings : Tools : Pencil : setColor', { color });

  this.strokeColor = color;
}

function activate() {
  Log.debug('Services : Drawings : Tools : Pencil : activate');

  this.tool.activate();
}

function onMouseDown(event) {
  Log.debug('Services : Drawings : Tools : Pencil : onMouseDown', { event });

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
  Log.info('Services : Drawings : Tools : Pencil : create');

  const scope = {
    dependencies : {
      realtimeService : dependencies?.realtimeService,
    },
    tool        : new Tool(),
    strokeColor : 'black', // @todo
    currentPath : undefined,
  };

  scope.tool.on('mousedown', (event) => {
    Log.debug('Pencil : onMouseDown');

    dependencies.realtimeService.send(
      drawingsMessages.doMouseDown,
      {
        tool : tools.pencil,
        ...onMouseDown.call(scope, event),
      },
    ).catch(() => {}); // @todo;
  });

  scope.tool.on('mousedrag', throttle(
    (event) => {
      Log.debug('Pencil : onMouseDrag');

      dependencies.realtimeService.send(
        drawingsMessages.doMouseDrag,
        {
          tool : tools.pencil,
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
