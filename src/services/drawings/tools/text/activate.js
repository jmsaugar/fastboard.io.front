import { Log } from '#utils';

export default function activate() {
  Log.debug('Services : Drawings : Tools : Text : activate');

  this.tool.activate();
}
