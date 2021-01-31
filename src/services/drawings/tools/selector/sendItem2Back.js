import { drawingsMessages, tools } from '#constants';

import onItem2Back from './onItem2Back';

/**
 * Send an item backwards in the board
 * and notify other users.
 */
export default function sendItem2Back() {
  if (!this.selectedItem.drawings) {
    return;
  }

  const itemName = this.selectedItem.drawings.name;

  onItem2Back.call(this, itemName);

  this.dependencies.realtimeService.send(
    drawingsMessages.doSendItemBackward,
    { tool : tools.selector, itemName },
  ).catch(() => {}); // @todo
}
