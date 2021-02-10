import { point2net } from '#utils';

import { disappearTimeout } from './constants';

/**
 * Mouse drag event pointer handler.
 *
 * Draws on the drawings and map canvases.
 *
 * @param {Object} event Mouse drag event.
 *
 * @returns {Object|undefined} Pointer drawing information or undefined if not applicable.
 */
export default function onMouseDrag(event) {
  if (!this.currentPath) {
    return undefined;
  }

  const point = point2net(event.point);
  const path = this.currentPath;
  path.add(point);

  setTimeout(() => path.removeSegment(0), disappearTimeout);

  return { point };
}
