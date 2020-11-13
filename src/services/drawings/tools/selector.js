import { Path, Tool } from 'paper';

import { Log, throttle } from '#utils';
import { drawingsMessages, tools } from '#constants';

const throttleDelay = 5; // In milliseconds

function activate() {
  Log.debug('Services : Drawings : Tools : Selector : activate');

  this.tool.activate();
}

function onMouseDown(event) {
  Log.debug('Services : Drawings : Tools : Selector : onMouseDown', { event });

  // Data required by the event
  const point = {
    x : event.point.x,
    y : event.point.y,
  };

  // const strokeColor = event.strokeColor || this.strokeColor;

  // this.currentPath = new Path({
  //   strokeColor,
  //   strokeWidth,
  //   strokeCap,
  // });

  // this.currentPath.add(point);

  // return { point, strokeColor };
}

function onMouseDrag(event) {
  // // Data required by the event
  // const point = {
  //   x : event.point.x,
  //   y : event.point.y,
  // };

  // this.currentPath.add(point);

  // return { point };
}

export default (dependencies) => {
  Log.info('Services : Drawings : Tools : Selector : create');

  const scope = {
    dependencies : {
      realtimeService : dependencies?.realtimeService,
    },
    tool        : new Tool(),
  };

  scope.tool.on('mousedown', (event) => {
    Log.debug('Selector : onMouseDown');

    dependencies.realtimeService.send(
      drawingsMessages.doMouseDown,
      {
        tool : tools.selector,
        ...onMouseDown.call(scope, event),
      },
    ).catch(() => {}); // @todo;
  });

  scope.tool.on('mousedrag', throttle(
    (event) => {
      Log.debug('Selector : onMouseDrag');

      dependencies.realtimeService.send(
        drawingsMessages.doMouseDrag,
        {
          tool : tools.selector,
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
