import { drawingsMessages, tools } from '#constants';
import { noop } from '#utils';
import { drawingsService } from '#services';

import reset from './reset';

/**
 * Unselect the current text item
 * and sent notification to other users.
 */
export default function unselectText(selectItem = true) {
  if (!this.currentText.drawings) {
    return;
  }

  const { itemName } = this.currentText;

  // Reset the tool
  reset.call(this);

  // Send notification to other users
  this.dependencies.realtimeService.send(
    drawingsMessages.doUnselectText,
    { tool : tools.text },
  ).catch(noop); // @todo decide what to do with those cases

  // Use select tool on text item if specified
  if (selectItem) {
    drawingsService.tools.selector.activate(itemName);
  }
}
