import { Log } from '#utils';

export default function activate() {
  Log.debug('Service : Drawings : Tools : Pen : activate');

  this.tool.activate();
}
