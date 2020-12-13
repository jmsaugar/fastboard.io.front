import { Log } from '#utils';

export default function onMouseUp() {
  Log.debug('Service : Drawings : Tools : Pencil : onMouseUp');

  this.currentPath.simplify(0);
}
