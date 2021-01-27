import { Log } from '#utils';

/**
 * Handle onItemRemoved event from a remote user.
 *
 * @param {Object} params { userId, tool, itemName }
 */
export default function onItemRemoved({ userId, tool, itemName }) {
  Log.debug('Service : Drawings : onItemRemoved', { userId, tool, itemName });

  if (!this.users[userId] || !this.users[userId][tool]) {
    Log.warning('Service : Drawings : onItemRemoved : no such user or tool', { userId, tool });
    return;
  }

  this.users[userId][tool].onItemRemoved(itemName);
}
