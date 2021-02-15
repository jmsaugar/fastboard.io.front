import { drawingsMessages, tools } from '#constants';
import { noop } from '#utils';

import onTextUpdated from './onTextUpdated';

/**
 * Update the current text item
 * and sent notification to other users.
 *
 * @param {String} text Text to update the item with.
 */
export default function updateText(text) {
  if (!this.currentText.drawings) {
    return;
  }

  onTextUpdated.call(this, { content : text });

  this.dependencies.realtimeService.send(
    drawingsMessages.doUpdateText,
    { tool : tools.text, content : text },
  ).catch(noop); // @todo decide what to do with those cases
}
