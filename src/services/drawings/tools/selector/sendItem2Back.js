import { Log, noop } from '#utils';
import { drawingsMessages, tools } from '#constants';

import onItem2Back from './onItem2Back';

/**
 * Send an item backwards in the board
 * and notify other users.
 */
export default function sendItem2Back() {
  Log.debug('Service : Drawings : Tools : Selector : sendItem2Back');

  if (!this.selectedItem.drawings) {
    return;
  }

  const itemName = this.selectedItem.drawings.name;

  onItem2Back.call(this, itemName);

  this.dependencies.realtimeService.send(
    drawingsMessages.doSendItemBackward,
    { tool : tools.selector, itemName },
  ).catch(noop); // @todo decide what to do with those cases
}
