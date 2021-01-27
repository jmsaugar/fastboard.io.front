import { drawingsMessages, tools } from '#constants';

import onItemRemoved from './onItemRemoved';

/**
 * Remove an item from the board
 * and notify other users..
 */
export default function removeItem() {
  const itemName = onItemRemoved.call(this);

  this.dependencies.realtimeService.send(
    drawingsMessages.doRemoveItem,
    { tool : tools.selector, itemName },
  ).catch(() => {}); // @todo
}
