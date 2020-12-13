import { Log } from '#utils';
import { notificationTypes } from '#constants';
import store, { addNotification, otherUsersSelector } from '#store';

/**
 * Handle onBoardCleared event from a remote user.
 *
 * @param {Object} params { userId, tool }
 */
export default function onBoardCleared({ userId, tool }) {
  Log.debug('Service : Drawings : onBoardCleared', { userId, tool });

  if (!this.users[userId] || !this.users[userId][tool]) {
    Log.warning('Service : Drawings : onBoardCleared : no such user or tool', { userId, tool });
    return;
  }

  this.users[userId][tool].onBoardCleared();

  // Trigger a notification
  const userName = otherUsersSelector(store.getState()).find(({ id }) => id === userId)?.name;
  store.dispatch(addNotification({
    type : notificationTypes.boardCleared,
    data : { userName },
  }));
}
