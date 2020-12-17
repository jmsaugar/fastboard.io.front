import { Log } from '#utils';
import { notificationTypes } from '#constants';
import store, { setUserName, addNotification, otherUsersSelector } from '#store';

/**
 * Handle a user setting his name.
 * Dispatches actions to the store.
 *
 * @param {Object} data { userId, userName }
 */
export default function onDidSetUserName({ userId, userName }) {
  Log.debug('Service : Boards : onDidSetUserName', { userId, userName });

  const oldUserName = otherUsersSelector(store.getState()).find(({ id }) => id === userId)?.name;

  store.dispatch(setUserName({ id : userId, name : userName }));
  store.dispatch(addNotification({
    type : notificationTypes.userNameSet,
    data : { oldUserName, newUserName : userName },
  }));
}
