import { Log } from '#utils';

/**
 * Handle onImageAdded event from a remote user.
 *
 * @param {Object} params { userId, tool, ...eventData }
 */
export default function onImageAdded({ userId, tool, ...eventData }) {
  Log.debug('Services : Drawings : onImageAdded', { userId, tool, ...eventData });

  if (!this.users[userId] || !this.users[userId][tool]) {
    Log.warning('Services : Drawings : onKeyDown : no such user or tool', { userId, tool });
    return;
  }

  this.users[userId][tool].onImageAdded(eventData);
}
