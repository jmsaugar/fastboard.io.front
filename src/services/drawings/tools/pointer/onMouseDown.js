import { Path } from 'paper';

import { drawingsLayers, canvasIds } from '#constants';
import { Log, point2net } from '#utils';

import {
  strokeColor,
  strokeWidth,
  opacity,
  strokeCap,
  shadowColor,
  shadowBlur,
  shadowOffset,
  disappearTimeout,
} from './constants';

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

  // Check that the event is triggered on the drawings canvas
  const eventData = event?.event;
  if (eventData && eventData?.target?.id !== canvasIds.drawings) {
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

  setTimeout(() => newPath.removeSegment(0), disappearTimeout);

  return { point, strokeColor };
}
