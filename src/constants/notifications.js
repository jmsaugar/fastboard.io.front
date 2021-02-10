export const notificationsTimeout = 5000; // In milliseconds

export const notificationTypes = Object.freeze({
  userJoined       : 'userJoined',
  userLeft         : 'userLeft',
  userNameSet      : 'userNameSet',
  boardNameSet     : 'boardNameSet',
  boardCleared     : 'boardCleared',
  boardExportError : 'boardExportError',
});
