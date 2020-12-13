import { Log } from '#utils';

export default function activate() {
  Log.debug('Service : Drawings : Tools : Text : activate');

  this.tool.activate();
}
