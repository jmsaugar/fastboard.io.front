import { Log } from '#utils';

/**
 * Handle onTextUnselected event from a remote user.
 *
 * @param {Object} params { userId, tool }
 */
export default function onTextUnselected({ userId, tool }) {
  Log.debug('Service : Drawings : onTextUnselected', { userId, tool });

  if (!this.users[userId]) {
    Log.warning('Service : Drawings : onTextUnselected : no such user', { userId });
    return;
  }

  // Create the text item
  this.users[userId][tool].onTextUnselected();
}
