import { Path, Point } from 'paper';

import { Log, point2net } from '#utils';

const strokeColor = 'red'; // @todo constants
const strokeWidth = 3;
const opacity = 0.7;
const strokeCap = 'round';
const shadowColor = 'red';
const shadowBlur = 6;
const shadowOffset = new Point(2, 2);

export default function onMouseDown(event) {
  Log.debug('Services : Drawings : Tools : Pointer : onMouseDown', { event });

  const point = point2net(event.point);

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
