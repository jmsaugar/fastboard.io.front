import { Log } from '#utils';
import { drawingColorCodes } from '#constants';

/**
 * Set color of the text.
 *
 * @param {String} color New color to be used.
 */
export default function setColor(color) {
  Log.debug('Service : Drawings : Tools : Text : setColor', { color });

  this.strokeColor = drawingColorCodes[color];
}
