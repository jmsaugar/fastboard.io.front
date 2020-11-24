import { Log } from '#utils';

export default function activate() {
  Log.debug('Services : Drawings : Tools : Pointer : activate');

  this.tool.activate();
}
