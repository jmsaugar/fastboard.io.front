import { Log } from '#utils';

import reset from './reset';

/**
 * Unselect the currently selected item if it has the given name.
 *
 * @param {String} itemName Name of the item to be checked for unselection.
 */
export default function unselectItem(itemName) {
  Log.debug('Service : Drawings : Tools : Selector : unselectItem', { itemName });

  if (!this.selectedItem.drawings || this.selectedItem.drawings.name !== itemName) {
    return;
  }

  reset.call(this);
}
