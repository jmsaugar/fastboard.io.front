import { Log } from '#utils';

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
}

export {
  onDidJoin,
  onDidLeave,
  onDidSetUserName,
  onDidSetBoardName,
};
