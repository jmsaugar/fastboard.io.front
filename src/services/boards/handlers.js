import { Log } from '#utils';
import { notificationTypes } from '#constants';
import store, {
  addUser, removeUser, setBoardName, setUserName, addNotification, otherUsersSelector,
} from '#store';

/**
 * Handle a new user joining the board.
 * Dispatches actions to the store.
 *
 * @param {Object} data { userId, userName }
 */
function onDidJoin({ userId, userName }) {
  Log.debug('Service : Boards : onDidJoin', { userId, userName });

  store.dispatch(addUser({ id : userId, name : userName }));
  store.dispatch(addNotification({
    type : notificationTypes.userJoined,
    data : { userName },
  }));
}

/**
 * Handle an user leaving the board.
 * Dispatches actions to the store.
 *
 * @param {Object} data { userId }
 */
function onDidLeave({ userId }) {
  Log.debug('Service : Boards : onDidLeave', { userId });

  const userName = otherUsersSelector(store.getState()).find(({ id }) => id === userId)?.name;

  store.dispatch(removeUser({ id : userId }));
  store.dispatch(addNotification({
    type : notificationTypes.userLeft,
    data : { userName },
  }));
}

/**
 * Handle an user setting his name.
 * Dispatches actions to the store.
 *
 * @param {Object} data { userId, userName }
 */
function onDidSetUserName({ userId, userName }) {
  Log.debug('Service : Boards : onDidSetUserName', { userId, userName });

  const oldUserName = otherUsersSelector(store.getState()).find(({ id }) => id === userId)?.name;

  store.dispatch(setUserName({ id : userId, name : userName }));
  store.dispatch(addNotification({
    type : notificationTypes.userNameSet,
    data : { oldUserName, newUserName : userName },
  }));
}

/**
 * Handle the board being set a new name.
 * Dispatches actions to the store.
 *
 * @param {Object} data { boardId, boardName }
 */
function onDidSetBoardName({ boardId, boardName }) {
  Log.debug('Service : Boards : onDidSetBoardName', { boardId, boardName });

  store.dispatch(setBoardName(boardName));
  store.dispatch(addNotification({
    type : notificationTypes.boardNameSet,
    data : { boardName },
  }));
}

export {
  onDidJoin,
  onDidLeave,
  onDidSetUserName,
  onDidSetBoardName,
};
