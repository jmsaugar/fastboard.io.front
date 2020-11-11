import { Log } from '#utils';
import { boardsMessages, boardsErrors } from '#constants';

/**
 * Inject service dependencies.
 *
 * @param {Object} params Dependencies { drawingsService, realtimeService }.
 *
 * @throws {Error} In case dependencies are not passed.
 */
function injectDependencies({ drawingsService, realtimeService }) {
  Log.info('Services : Boards : injectDependencies', { drawingsService, realtimeService });

  if (!drawingsService || !realtimeService) {
    throw new Error('Services : Boards : injectDependencies : missing dependencies');
  }

  this.dependencies = {
    drawingsService,
    realtimeService,
  };
}

/**
 * Create a new board and join it.
 *
 * Includes all the events attaching logic.
 *
 * @param {String} boardName Name of the board.
 * @param {String} userName Name of the user.
 *
 * @return {Promise} Resolved when the board has been created and joined; rejected otherwise.
 */
function create(boardName, userName) {
  Log.info('Service : Boards : create', { boardName, userName });

  return this.dependencies.realtimeService.send(boardsMessages.doCreate, { boardName, userName })
    .then(({ boardId, boardName : joinedBoardName }) => {
      Log.debug('Service : Boards : create : ack', { boardId, joinedBoardName });

      // Check join data is correct
      if (!boardId || boardName !== joinedBoardName) {
        return Promise.reject(boardsErrors.generic);
      }

      // Add handlers for messages
      this.dependencies.realtimeService.setMessageHandlers();

      return { boardId, boardName };
    });
}

/**
 * Join a board.
 *
 * Includes all the events attaching logic.
 *
 * @param {String} boardId Id of the board.
 * @param {String} userName Name of the user.
 *
 * @return {Promise} Resolved when the board has been joined; rejected otherwise.
 */
function join(boardId, userName) {
  Log.info('Service : Boards : join', { boardId, userName });

  // @todo check parameters before requesting
  return this.dependencies.realtimeService.send(boardsMessages.doJoin, { boardId, userName })
    .then(({ boardId : joinedBoardId, boardName, users }) => {
      Log.debug('Service : Boards : join : ack', { joinedBoardId, boardName, users });

      // Check join data is correct
      if (!boardName || boardId !== joinedBoardId) {
        return Promise.reject(boardsErrors.generic);
      }

      // Add handlers for messages
      this.dependencies.realtimeService.setMessageHandlers();

      return { boardId, boardName, users };
    });
}

/**
 * Send user name set request.
 *
 * @param {String} userName New user name.
 *
 * @return {Promise} Resolved if successful; rejected otherwise.
 */
function setUserName(userName) {
  Log.info('Service : Boards : setUserName', { userName });

  return this.dependencies.realtimeService.send(
    boardsMessages.onDidSetUserName,
    userName,
  );
}

/**
 * Send board name set request.
 *
 * @param {String} boardName New board name.
 *
 * @return {Promise} Resolved if successful; rejected otherwise.
 */
function setBoardName(boardName) {
  Log.info('Service : Boards : setBoardName', { boardName });

  return this.dependencies.realtimeService.send(
    boardsMessages.doSetBoardName,
    boardName,
  );
}

export {
  injectDependencies,
  create,
  join,
  setUserName,
  setBoardName,
};
