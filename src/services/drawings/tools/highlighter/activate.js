import { Log } from '#utils';

export default function activate() {
  Log.debug('Services : Drawings : Tools : Highlighter : activate');

  this.tool.activate();
}
