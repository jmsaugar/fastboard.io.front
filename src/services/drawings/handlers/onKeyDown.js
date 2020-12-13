import { Log } from '#utils';

/**
 * Handle onKeyDown event from a remote user.
 *
 * @param {Object} params { userId, tool, ...eventData }
 */
export default function onKeyDown({ userId, tool, ...eventData }) {
  Log.debug('Service : Drawings : onKeyDown', { userId, tool, ...eventData });

  if (!this.users[userId] || !this.users[userId][tool]) {
    Log.warning('Service : Drawings : onKeyDown : no such user or tool', { userId, tool });
    return;
  }

  this.users[userId][tool].onKeyDown(eventData);
}
