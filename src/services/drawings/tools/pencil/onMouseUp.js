import { Log } from '#utils';

/**
 * Mouse up event pencil handler.
 *
 * Draws on the drawings and map canvases.
 *
 * @param {Object} event Mouse up event.
 */
export default function onMouseUp() {
  Log.debug('Service : Drawings : Tools : Pencil : onMouseUp');

  if (this.currentPath.drawings) {
    this.currentPath.drawings.simplify(0);
  }

  if (this.currentPath.map) {
    this.currentPath.map.simplify(0);
  }

  this.currentPath = {};
}
