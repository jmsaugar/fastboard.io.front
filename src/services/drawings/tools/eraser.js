import { Path, Tool } from 'paper';

import { Log, throttle } from '#utils';

const strokeColor = 'white';
const strokeWidth = 10;

function activate() {
  Log.debug('Services : Drawings : Tools : Eraser : activate');

  this.tool.activate();
}

function onMouseDown(event) {
  // Data required by the event
  const point = {
    x : event.point.x,
    y : event.point.y,
  };

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

export default () => {
  Log.info('Services : Drawings : Tools : Eraser : create');

  const scope = {
    tool        : new Tool(),
    currentPath : undefined,
  };

  scope.tool.onMouseDown = onMouseDown.bind(scope);
  scope.tool.onMouseDrag = throttle(onMouseDrag.bind(scope), 10);

  return Object.freeze({
    activate    : activate.bind(scope),
    onMouseDown : onMouseDown.bind(scope),
    onMouseDrag : onMouseDrag.bind(scope),
  });
};
