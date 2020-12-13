import { Log } from '#utils';

/**
 * Handle onMouseUp event from a remote user.
 *
 * @param {Object} params { userId, tool, ...eventData }
 */
export default function onMouseUp({ userId, tool, ...eventData }) {
  if (!this.users[userId] || !this.users[userId][tool]) {
    Log.warning('Service : Drawings : onMouseUp : no such user or tool', { userId, tool });
    return;
  }

  this.users[userId][tool].onMouseUp(eventData);
}
