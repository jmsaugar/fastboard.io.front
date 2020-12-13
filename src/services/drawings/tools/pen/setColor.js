import { Log } from '#utils';
import { drawingColorCodes } from '#constants';

export default function setColor(color) {
  Log.debug('Service : Drawings : Tools : Pen : setColor', { color });

  this.strokeColor = drawingColorCodes[color];
}
