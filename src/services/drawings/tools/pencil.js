import { Path, Tool } from 'paper';

import { Log, throttle } from '#utils';
import { drawingsMessages } from '#constants';

const strokeWidth = 1;

function setColor(color) {
  Log.debug('Services : Drawings : Tools : Pencil : setColor', { color });

  this.scope.strokeColor = color;
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

  this.currentPath = new Path({
    strokeColor : this.strokeColor,
    strokeWidth,
  });

  this.currentPath.add(point);

  return { point, strokeColor : this.strokeColor };
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
      onMouseDown.call(scope, event),
    ).catch(() => {}); // @todo;
  });

  scope.tool.on('mousedrag', throttle(
    (event) => {
      Log.debug('Pencil : onMouseDrag');

      dependencies.realtimeService.send(
        drawingsMessages.doMouseDrag,
        onMouseDrag.call(scope, event),
      ).catch(() => {}); // @todo;
    },
    10,
  ));

  return Object.freeze({
    setColor    : setColor.bind(scope),
    activate    : activate.bind(scope),
    onMouseDown : onMouseDown.bind(scope),
    onMouseDrag : onMouseDrag.bind(scope),
  });
};
