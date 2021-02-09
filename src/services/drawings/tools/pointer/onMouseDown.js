import { Path, Point } from 'paper';

import { drawingsLayers, canvasIds } from '#constants';
import { Log, point2net } from '#utils';

// @todo to constants
const strokeColor = '#ff1616';
const strokeWidth = 3;
const opacity = 0.7;
const strokeCap = 'round';
const shadowColor = '#ff4747';
const shadowBlur = 8;
const shadowOffset = new Point(2, 2);

/**
 * Mouse down event pointer handler.
 *
 * Draws on the drawings canvas only.
 *
 * @param {Object} event Mouse down event.
 *
 * @returns {Object|undefined} Pointer drawing information or undefined if not applicable.
 */
export default function onMouseDown(event) {
  Log.debug('Service : Drawings : Tools : Pointer : onMouseDown', { event });

  // @todo get canvas drawings id from dependencies?
  // Check that the event is triggered on the drawings canvas
  const element = event?.event?.path?.[0];
  if (element && element.id !== canvasIds.drawings) {
    return undefined;
  }

  const point = point2net(event.point);
  const newPath = new Path({
    strokeColor,
    strokeWidth,
    opacity,
    strokeCap,
    shadowColor,
    shadowBlur,
    shadowOffset,
    parent : this.dependencies.projects.drawings.layers[drawingsLayers.drawings],
  });

  newPath.add(point);
  this.currentPath = newPath;

  // @todo time to constantsadd(point);
  setTimeout(() => newPath.removeSegment(0), 500);

  return { point, strokeColor };
}
