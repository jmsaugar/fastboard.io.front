import { Log } from '#utils';

/**
 * Handle onItem2Back event from a remote user.
 *
 * @param {Object} params { userId, tool, itemName }
 */
export default function onItem2Back({ userId, tool, itemName }) {
  Log.debug('Service : Drawings : onItem2Back', { userId, tool, itemName });

  if (!this.users[userId] || !this.users[userId][tool]) {
    Log.warning('Service : Drawings : onItem2Back : no such user or tool', { userId, tool });
    return;
  }

  this.users[userId][tool].onItem2Back(itemName);
}
