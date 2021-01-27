import { drawingsMessages, tools } from '#constants';

import onItem2Front from './onItem2Front';

/**
 * Bring an item to the front in the board
 * and notify other users.
 */
export default function sendItem2Back() {
  const itemName = onItem2Front.call(this);

  this.dependencies.realtimeService.send(
    drawingsMessages.doBringItemForward,
    { tool : tools.selector, itemName },
  ).catch(() => {}); // @todo
}
