import { Log } from '#utils';

export default function activate() {
  Log.debug('Service : Drawings : Tools : Pencil : activate');

  this.tool.activate();
}
