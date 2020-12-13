import { Log } from '#utils';

export default function activate() {
  Log.debug('Service : Drawings : Tools : Eraser : activate');

  this.tool.activate();
}
