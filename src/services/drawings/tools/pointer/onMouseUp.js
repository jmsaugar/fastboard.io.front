import { Log } from '#utils';

/**
 * Mouse up event pointer handler.
 *
 * Draws on the drawings and map canvases.
 *
 * @param {Object} event Mouse up event.
 */
export default function onMouseUp() {
  Log.debug('Service : Drawings : Tools : Pointer : onMouseUp');

  this.currentPath = undefined;
}
