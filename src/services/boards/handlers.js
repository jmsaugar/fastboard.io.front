import { Log } from '#utils';
import { setBoardName } from '#store';

function onDidJoin() {
  Log.debug('Service : Boards : onDidJoin');
}

function onDidLeave({ userId }) {
  Log.debug('Service : Boards : onDidLeave', { userId });
}

function onDidSetUserName({ userId, userName }) {
  Log.debug('Service : Boards : onDidSetUserName', { userId, userName });
}

function onDidSetBoardName({ boardId, boardName }) {
  Log.debug('Service : Boards : onDidSetBoardName', { boardId, boardName });

  setBoardName(boardName);
}

export {
  onDidJoin,
  onDidLeave,
  onDidSetUserName,
  onDidSetBoardName,
};
