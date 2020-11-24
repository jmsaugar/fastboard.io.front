import { Log } from '#utils';

export default function setColor(color) {
  Log.debug('Services : Drawings : Tools : Pencil : setColor', { color });

  this.strokeColor = color;
}
