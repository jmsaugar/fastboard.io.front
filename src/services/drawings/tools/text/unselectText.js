import { drawingsMessages, tools } from '#constants';
import { noop } from '#utils';

import onTextUnselected from './onTextUnselected';

/**
 * Unselect the current text item
 * and sent notification to other users.
 */
export default function unselectText() {
  if (!this.currentText.drawings) {
    return;
  }

  onTextUnselected.call(this);

  this.dependencies.realtimeService.send(
    drawingsMessages.doUnselectText,
    { tool : tools.text },
  ).catch(noop); // @todo decide what to do with those cases
}
