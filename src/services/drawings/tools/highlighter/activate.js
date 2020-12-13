import { Log } from '#utils';

export default function activate() {
  Log.debug('Service : Drawings : Tools : Highlighter : activate');

  this.tool.activate();
}
