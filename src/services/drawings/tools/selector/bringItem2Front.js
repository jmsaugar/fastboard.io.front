import { Log, noop } from '#utils';
import { drawingsMessages, tools } from '#constants';

import onItem2Front from './onItem2Front';

/**
 * Bring an item forward in the board
 * and notify other users.
 */
export default function bringItem2Front() {
  Log.debug('Service : Drawings : Tools : Selector : bringItem2Front');

  if (!this.selectedItem.drawings) {
    return;
  }

  const itemName = this.selectedItem.drawings.name;

  onItem2Front.call(this, itemName);

  this.dependencies.realtimeService.send(
    drawingsMessages.doBringItemForward,
    { tool : tools.selector, itemName },
  ).catch(noop); // @todo decide what to do with those cases
}
