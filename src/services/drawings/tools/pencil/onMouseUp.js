import { Log } from '#utils';

export default function onMouseUp() {
  Log.debug('Service : Drawings : Tools : Pencil : onMouseUp');

  if (this.currentPath.drawings) {
    this.currentPath.drawings.simplify(0);
    this.currentPath.map.simplify(0);
  }

  this.currentPath = {};
}
