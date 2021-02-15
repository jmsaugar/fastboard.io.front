import { Log, noop } from '#utils';
import { drawingsMessages, tools } from '#constants';

import onItemRemoved from './onItemRemoved';

/**
 * Remove an item from the board
 * and notify other users.
 */
export default function removeItem() {
  Log.debug('Service : Drawings : Tools : Selector : removeItem');

  if (!this.selectedItem.drawings) {
    return;
  }

  const itemName = this.selectedItem.drawings.name;

  onItemRemoved.call(this, itemName);

  this.dependencies.realtimeService.send(
    drawingsMessages.doRemoveItem,
    { tool : tools.selector, itemName },
  ).catch(noop); // @todo decide what to do with those cases
}
