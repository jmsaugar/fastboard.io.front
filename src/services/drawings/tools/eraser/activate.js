import { Log } from '#utils';

export default function activate() {
  Log.debug('Services : Drawings : Tools : Eraser : activate');

  this.tool.activate();
}
