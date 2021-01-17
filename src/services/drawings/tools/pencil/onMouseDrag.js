import { point2net } from '#utils';

/**
 * Mouse drag event pencil handler.
 *
 * Draws on the drawings and map canvases.
 *
 * @param {Object} event Mouse drag event.
 *
 * @returns {Object|undefined} Pencil drawing information or undefined if not applicable.
 */
export default function onMouseDrag(event) {
  if (!this.currentPath.drawings || !this.currentPath.map) {
    return undefined;
  }

  const point = point2net(event.point);

  this.currentPath.drawings.add(point);
  this.currentPath.map.add(point);

  return { point };
}
