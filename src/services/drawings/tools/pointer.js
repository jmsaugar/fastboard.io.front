import { Path, Tool, Point } from 'paper';

import { Log, throttle } from '#utils';
import { drawingsMessages, tools } from '#constants';

const throttleDelay = 5; // In milliseconds
const strokeColor = 'red'; // @todo constants
const strokeWidth = 3;
const opacity = 0.7;
const strokeCap = 'round';
const shadowColor = 'red';
const shadowBlur = 6;
const shadowOffset = new Point(2, 2);

function activate() {
  Log.debug('Services : Drawings : Tools : Pointer : activate');

  this.tool.activate();
}

function onMouseDown(event) {
  Log.debug('Services : Drawings : Tools : Pointer : onMouseDown', { event });

  // Data required by the event
  const point = {
    x : event.point.x,
    y : event.point.y,
  };

  this.currentPath = new Path({
    strokeColor,
    strokeWidth,
    opacity,
    strokeCap,
    shadowColor,
    shadowBlur,
    shadowOffset,
  });

  this.currentPath.add(point);

  // @todo polish this, sometimes has weird behaviour
  setTimeout(
    () => {
      this.interval = setInterval(
        () => {
          if (this.currentPath.segments.length) {
            this.currentPath.removeSegment(0);
          } else {
            clearInterval(this.interval);
          }
        },
        10,
      );
    },
    500,
  );

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
  Log.info('Services : Drawings : Tools : Pointer : create');

  const scope = {
    dependencies : {
      realtimeService : dependencies?.realtimeService,
    },
    tool        : new Tool(),
    currentPath : undefined,
    interval    : undefined,
  };

  scope.tool.on('mousedown', (event) => {
    Log.debug('Pointer : onMouseDown');

    dependencies.realtimeService.send(
      drawingsMessages.doMouseDown,
      {
        tool : tools.pointer,
        ...onMouseDown.call(scope, event),
      },
    ).catch(() => {}); // @todo;
  });

  scope.tool.on('mousedrag', throttle(
    (event) => {
      Log.debug('Pointer : onMouseDrag');

      dependencies.realtimeService.send(
        drawingsMessages.doMouseDrag,
        {
          tool : tools.pointer,
          ...onMouseDrag.call(scope, event),
        },
      ).catch(() => {}); // @todo;
    },
    throttleDelay,
  ));

  return Object.freeze({
    activate    : activate.bind(scope),
    onMouseDown : onMouseDown.bind(scope),
    onMouseDrag : onMouseDrag.bind(scope),
  });
};
