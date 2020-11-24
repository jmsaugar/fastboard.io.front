import { Log } from '#utils';
import { notificationTypes } from '#constants';
import store, { removeUser, addNotification, otherUsersSelector } from '#store';

/**
 * Handle an user leaving the board.
 * Dispatches actions to the store.
 *
 * @param {Object} data { userId }
 */
export default function onDidLeave({ userId }) {
  Log.debug('Service : Boards : onDidLeave', { userId });

  const userName = otherUsersSelector(store.getState()).find(({ id }) => id === userId)?.name;

  store.dispatch(removeUser({ id : userId }));
  store.dispatch(addNotification({
    type : notificationTypes.userLeft,
    data : { userName },
  }));
}
