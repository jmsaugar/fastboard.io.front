import { Log } from '#utils';

/**
 * Handle onTextUpdated event from a remote user.
 *
 * @param {Object} params { userId, tool, ...data }
 */
export default function onTextUpdated({ userId, tool, ...data }) {
  Log.debug('Service : Drawings : onTextUpdated', { userId, tool, data });

  if (!this.users[userId]) {
    Log.warning('Service : Drawings : onTextUpdated : no such user', { userId });
    return;
  }

  // Create the text item
  this.users[userId][tool].onTextUpdated(data);
}
