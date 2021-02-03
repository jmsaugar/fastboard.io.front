import { Log } from '#utils';

/**
 * Activate text tool.
 */
export default function activate() {
  Log.debug('Service : Drawings : Tools : Text : activate');

  this.tool.activate();
}
