import { Log } from '#utils';

// @todo this could be refactored

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

/**
 * Handle onKeyDown event from a remote user.
 *
 * @param {Object} params { userId, tool, ...eventData }
 */
function onKeyDown({ userId, tool, ...eventData }) {
  if (!this.users[userId] || !this.users[userId][tool]) {
    Log.warning('Services : Drawings : onKeyDown : no such user or tool', { userId, tool });
    return;
  }

  this.users[userId][tool].onKeyDown(eventData);
}

/**
 * Handle onImageAdded event from a remote user.
 *
 * @param {Object} params { userId, tool, ...eventData }
 */
function onImageAdded({ userId, tool, ...eventData }) {
  if (!this.users[userId] || !this.users[userId][tool]) {
    Log.warning('Services : Drawings : onKeyDown : no such user or tool', { userId, tool });
    return;
  }

  this.users[userId][tool].onImageAdded(eventData);
}

/**
 * Handle onBoardCleared event from a remote user.
 *
 * @param {Object} params { userId, tool }
 */
function onBoardCleared({ userId, tool }) {
  if (!this.users[userId] || !this.users[userId][tool]) {
    Log.warning('Services : Drawings : onBoardCleared : no such user or tool', { userId, tool });
    return;
  }

  this.users[userId][tool].onBoardCleared();
}

export {
  onMouseDown,
  onMouseDrag,
  onKeyDown,
  onImageAdded,
  onBoardCleared,
};
