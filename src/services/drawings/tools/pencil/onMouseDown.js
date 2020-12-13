import { Path } from 'paper';

import { Log, point2net } from '#utils';

const strokeWidth = 2;
const strokeCap = 'round';

export default function onMouseDown(event) {
  Log.debug('Service : Drawings : Tools : Pencil : onMouseDown', { event });

  const point = point2net(event.point);
  const strokeColor = event.strokeColor || this.strokeColor;

  this.currentPath = new Path({
    strokeColor,
    strokeWidth,
    strokeCap,
  });

  this.currentPath.add(point);

  return { point, strokeColor };
}
