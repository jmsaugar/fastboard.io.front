import { drawingsMessages, tools } from '#constants';

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
  ).catch(() => {}); // @todo
}
