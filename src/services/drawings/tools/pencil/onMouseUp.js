import { Log } from '#utils';

export default function onMouseUp() {
  Log.debug('Services : Drawings : Tools : Pencil : onMouseUp');

  this.currentPath.simplify(0);
}
