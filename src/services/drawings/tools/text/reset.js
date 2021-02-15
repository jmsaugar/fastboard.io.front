import { Log } from '#utils';
import store, { hideTextAreaItem } from '#store';

import { unselectItem } from './item';

/**
 * Reset the text tool.
 */
export default function reset() {
  Log.debug('Service : Drawings : Tools : Text : reset');

  unselectItem(this.currentText.drawings);
  unselectItem(this.currentText.map);

  this.isWriting = false;
  this.currentText = {
    itemName : undefined,
    drawings : undefined,
    map      : undefined,
  };

  // Hide the TextAreaItem component
  store.dispatch(hideTextAreaItem());
}
