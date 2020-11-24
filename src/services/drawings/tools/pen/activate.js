import { Log } from '#utils';

export default function activate() {
  Log.debug('Services : Drawings : Tools : Pen : activate');

  this.tool.activate();
}
