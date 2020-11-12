import { Log } from '#utils';

/**
 * Handle onMouseDown event from a remote user.
 *
 * @param {Object} params { userId, tool, ...eventData }
 */
function onMouseDown({ userId, tool, ...eventData }) {
  Log.debug('Services : Drawings : onMouseDown', { userId, ...eventData });

  if (!this.users[userId] || !this.users[userId][tool]) {
    Log.warning('Services : Drawings : onMouseDown : no such user or tool', { userId, tool });
    return;
  }

  this.users[userId][tool].onMouseDown(eventData);
}

/**
 * Handle onMouseDrag event from a remote user.
 *
 * @param {Object} params { userId, tool, ...eventData }
 */
function onMouseDrag({ userId, tool, ...eventData }) {
  if (!this.users[userId] || !this.users[userId][tool]) {
    Log.warning('Services : Drawings : onMouseDown : no such user or tool', { userId, tool });
    return;
  }

  this.users[userId][tool].onMouseDrag(eventData);
}

export {
  onMouseDown,
  onMouseDrag,
};
