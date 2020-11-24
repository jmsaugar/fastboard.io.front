import { Log } from '#utils';
import { notificationTypes } from '#constants';
import store, { setBoardName, addNotification } from '#store';

/**
 * Handle the board being set a new name.
 * Dispatches actions to the store.
 *
 * @param {Object} data { boardId, boardName }
 */
export default function onDidSetBoardName({ boardId, boardName }) {
  Log.debug('Service : Boards : onDidSetBoardName', { boardId, boardName });

  store.dispatch(setBoardName(boardName));
  store.dispatch(addNotification({
    type : notificationTypes.boardNameSet,
    data : { boardName },
  }));
}
