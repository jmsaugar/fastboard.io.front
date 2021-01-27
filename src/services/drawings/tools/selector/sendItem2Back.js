import { drawingsMessages, tools } from '#constants';

import onItem2Back from './onItem2Back';

/**
 * Send an item back in the board
 * and notify other users.
 */
export default function sendItem2Back() {
  const itemName = onItem2Back.call(this);

  this.dependencies.realtimeService.send(
    drawingsMessages.doSendItemBackward,
    { tool : tools.selector, itemName },
  ).catch(() => {}); // @todo
}
