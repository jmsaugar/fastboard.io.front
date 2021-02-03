import { Log } from '#utils';

/**
 * Handle onTextCreated event from a remote user.
 *
 * @param {Object} params { userId, tool, ...data }
 */
export default function onTextCreated({ userId, tool, ...data }) {
  Log.debug('Service : Drawings : onTextCreated', { userId, tool, data });

  if (!this.users[userId]) {
    Log.warning('Service : Drawings : onTextCreated : no such user', { userId });
    return;
  }

  // Create the text item
  this.users[userId][tool].onTextCreated(data);
}
