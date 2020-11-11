import { Log } from '#utils';
import store, {
  addUser, removeUser, setBoardName, setUserName,
} from '#store';

/**
 * Handle a new user joining the board.
 * Dispatches an action to the store.
 *
 * @param {Object} data { userId, userName }
 */
function onDidJoin({ userId, userName }) {
  Log.debug('Service : Boards : onDidJoin', { userId, userName });

  store.dispatch(addUser({ id : userId, name : userName }));

  this.dependencies.drawingsService.addUser(userId);
}

/**
 * Handle an user leaving the board.
 * Dispatches an action to the store.
 *
 * @param {Object} data { userId }
 */
function onDidLeave({ userId }) {
  Log.debug('Service : Boards : onDidLeave', { userId });

  store.dispatch(removeUser({ id : userId }));

  this.dependencies.drawingsService.removeUser(userId);
}

/**
 * Handle an user setting his name.
 * Dispatches an action to the store.
 *
 * @param {Object} data { userId, userName }
 */
function onDidSetUserName({ userId, userName }) {
  Log.debug('Service : Boards : onDidSetUserName', { userId, userName });

  store.dispatch(setUserName({ id : userId, name : userName }));
}

/**
 * Handle the board being set a new name.
 * Dispatches an action to the store.
 *
 * @param {Object} data { boardId, boardName }
 */
function onDidSetBoardName({ boardId, boardName }) {
  Log.debug('Service : Boards : onDidSetBoardName', { boardId, boardName });

  store.dispatch(setBoardName(boardName));
}

export {
  onDidJoin,
  onDidLeave,
  onDidSetUserName,
  onDidSetBoardName,
};
