import { Log } from '#utils';
import { notificationTypes } from '#constants';
import store, { addUser, addNotification } from '#store';

/**
 * Handle a new user joining the board.
 * Dispatches actions to the store.
 *
 * @param {Object} data { userId, userName, joinDate }
 */
export default function onDidJoin({ userId, userName, joinDate }) {
  Log.debug('Service : Boards : onDidJoin', { userId, userName, joinDate });

  store.dispatch(addUser({ id : userId, name : userName, joinDate }));
  store.dispatch(addNotification({
    type : notificationTypes.userJoined,
    data : { userName },
  }));
}
