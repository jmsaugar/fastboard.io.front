import { Log } from '#utils';

/**
 * Handle onMouseDrag event from a remote user.
 *
 * @param {Object} params { userId, tool, ...eventData }
 */
export default function onMouseDrag({ userId, tool, ...eventData }) {
  if (!this.users[userId] || !this.users[userId][tool]) {
    Log.warning('Service : Drawings : onMouseDrag : no such user or tool', { userId, tool });
    return;
  }

  this.users[userId][tool].onMouseDrag(eventData);
}
