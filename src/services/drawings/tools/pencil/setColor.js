import { Log } from '#utils';
import { drawingColorCodes } from '#constants';

export default function setColor(color) {
  Log.debug('Service : Drawings : Tools : Pencil : setColor', { color });

  this.strokeColor = drawingColorCodes[color];
}
