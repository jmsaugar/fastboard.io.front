import { Log } from '#utils';

/**
 * Activate selector tool.
 */
export default function activate() {
  Log.debug('Services : Drawings : Tools : Selector : activate');

  this.tool.activate();
}
