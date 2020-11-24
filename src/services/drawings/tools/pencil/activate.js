import { Log } from '#utils';

export default function activate() {
  Log.debug('Services : Drawings : Tools : Pencil : activate');

  this.tool.activate();
}
