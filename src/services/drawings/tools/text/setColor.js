import { Log } from '#utils';
import { drawingColorCodes } from '#constants';

export default function setColor(color) {
  Log.debug('Services : Drawings : Tools : Text : setColor', { color });

  this.strokeColor = drawingColorCodes[color];
}
