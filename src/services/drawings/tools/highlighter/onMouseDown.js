import { Path } from 'paper';

import { Log, point2net } from '#utils';

const strokeWidth = 25;
const opacity = 0.5;

export default function onMouseDown(event) {
  Log.debug('Services : Drawings : Tools : Highlighter : onMouseDown', { event });

  const point = point2net(event.point);
  const strokeColor = event.strokeColor || this.strokeColor;

  this.currentPath = new Path({
    opacity,
    strokeColor,
    strokeWidth,
  });

  this.currentPath.add(point);

  return { point, strokeColor };
}
