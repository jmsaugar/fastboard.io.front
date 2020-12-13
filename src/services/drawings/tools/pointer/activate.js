import { Log } from '#utils';

export default function activate() {
  Log.debug('Service : Drawings : Tools : Pointer : activate');

  this.tool.activate();
}
