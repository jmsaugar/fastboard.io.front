function onDidJoin() {
  console.log('!!!.didJoin');
}

function onDidLeave({ userId }) {
  console.log('!!!.onDidLeave', userId);
}

function onDidSetUserName({ userId, userName }) {
  console.log('!!!.didSetUserName', userId, userName);
}

function onDidSetBoardName({ boardId, boardName }) {
  console.log('!!!.didSetBoardName', boardId, boardName);
}

export {
  onDidJoin,
  onDidLeave,
  onDidSetUserName,
  onDidSetBoardName,
};
