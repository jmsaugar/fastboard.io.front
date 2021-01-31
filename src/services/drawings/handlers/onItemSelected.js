import { Log } from '#utils';

/**
 * Handle onItemSelected event from a remote user.
 *
 * @param {Object} params { userId, tool, itemName }
 */
export default function onItemSelected({ userId, tool, itemName }) {
  Log.debug('Service : Drawings : onItemSelected', { userId, tool, itemName });

  if (!this.users[userId]) {
    Log.warning('Service : Drawings : onItem2Front : no such user', { userId });
    return;
  }

  // If local user has same item selected, unselect it
  this.tools.selector.unselectItem(itemName);
}
