import { drawingsMessages, tools } from '#constants';

import onItem2Front from './onItem2Front';

/**
 * Bring an item forward in the board
 * and notify other users.
 */
export default function bringItem2Front() {
  if (!this.selectedItem.drawings) {
    return;
  }

  const itemName = this.selectedItem.drawings.name;

  onItem2Front.call(this, itemName);

  this.dependencies.realtimeService.send(
    drawingsMessages.doBringItemForward,
    { tool : tools.selector, itemName },
  ).catch(() => {}); // @todo
}
