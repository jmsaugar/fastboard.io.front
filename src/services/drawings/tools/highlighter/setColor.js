import { Log } from '#utils';

export default function setColor(color) {
  Log.debug('Services : Drawings : Tools : Highlighter : setColor', { color });

  this.strokeColor = color;
}
