import { Path, Point } from 'paper';

import { Log, point2net } from '#utils';

// @todo to constants
const strokeColor = '#ff1616';
const strokeWidth = 3;
const opacity = 0.7;
const strokeCap = 'round';
const shadowColor = '#ff4747';
const shadowBlur = 8;
const shadowOffset = new Point(2, 2);

export default function onMouseDown(event) {
  Log.debug('Service : Drawings : Tools : Pointer : onMouseDown', { event });

  const point = point2net(event.point);
  const newPath = new Path({
    strokeColor,
    strokeWidth,
    opacity,
    strokeCap,
    shadowColor,
    shadowBlur,
    shadowOffset,
  });

  newPath.add(point);
  this.currentPath = newPath;

  // @todo time to constantsadd(point);
  setTimeout(() => newPath.removeSegment(0), 500);

  return { point, strokeColor };
}
