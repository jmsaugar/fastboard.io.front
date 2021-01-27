import { Log } from '#utils';

/**
 * Handle onItem2Front event from a remote user.
 *
 * @param {Object} params { userId, tool, itemName }
 */
export default function onItem2Front({ userId, tool, itemName }) {
  Log.debug('Service : Drawings : onItem2Front', { userId, tool, itemName });

  if (!this.users[userId] || !this.users[userId][tool]) {
    Log.warning('Service : Drawings : onItem2Front : no such user or tool', { userId, tool });
    return;
  }

  this.users[userId][tool].onItem2Front(itemName);
}
