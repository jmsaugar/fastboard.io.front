import { Path } from 'paper';

import { Log, point2net } from '#utils';

const strokeColor = 'white'; // @todo read from constant?
const strokeWidth = 15;
const strokeCap = 'round';

export default function onMouseDown(event) {
  Log.debug('Services : Drawings : Tools : Eraser : onMouseDown', { event });

  const point = point2net(event.point);

  this.currentPath = new Path({
    strokeColor,
    strokeWidth,
    strokeCap,
  });

  this.currentPath.add(point);

  return { point, strokeColor };
}
