import { Log } from '#utils';

export default function setColor(color) {
  Log.debug('Services : Drawings : Tools : Pen : setColor', { color });

  this.strokeColor = color;
}
