import { Log } from '#utils';

import { pencilToolFactory } from './tools';

/**
 * Handle onMouseDown event from a remote user.
 *
 * @param {Object} params { userId, ...eventData }
 */
function onMouseDown({ userId, ...eventData }) {
  Log.debug('Services : Drawings : onMouseDown', { userId, ...eventData });

  if (!this.users[userId]) {
    Log.warning('Services : Drawings : onMouseDown : no such user', { userId });
    return;
  }

  this.users[userId].onMouseDown(eventData);
}

/**
 * Handle onMouseDrag event from a remote user.
 *
 * @param {Object} params { userId, ...eventData }
 */
function onMouseDrag({ userId, ...eventData }) {
  if (!this.users[userId]) {
    Log.warning('Services : Drawings : onMouseDown : no such user', { userId });
    return;
  }

  this.users[userId].onMouseDrag(eventData);
}

/**
 * Handle onToolSet event from a remote user.
 *
 * @param {Object} params { userId, ...eventData }
 */
function onToolSet({ userId, eventData }) {
  if (!this.users[userId]) {
    Log.warning('Services : Drawings : onToolSet : no such user', { userId });
    return;
  }

  // @todo use the factory for the tool sent in eventData
  this.users[userId] = pencilToolFactory();
}

export {
  onMouseDown,
  onMouseDrag,
  onToolSet,
};
