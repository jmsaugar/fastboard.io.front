import { Log } from '#utils';

/**
 * Handle onMouseDown event from a remote user.
 *
 * @param {Object} params { userId, tool, ...eventData }
 */
export default function onMouseDown({ userId, tool, ...eventData }) {
  Log.debug('Services : Drawings : onMouseDown', { userId, tool, ...eventData });

  if (!this.users[userId] || !this.users[userId][tool]) {
    Log.warning('Services : Drawings : onMouseDown : no such user or tool', { userId, tool });
    return;
  }

  this.users[userId][tool].onMouseDown(eventData);
}
