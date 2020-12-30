import { Log, BoardError } from '#utils';
import { boardsMessages, boardsErrors } from '#constants';

/**
 * Create a new board and join it.
 *
 * Includes all the events attaching logic.
 *
 * @param {String} boardName Name of the board.
 * @param {String} userName Name of the user.
 *
 * @returns {Promise} Resolved when the board has been created and joined; rejected otherwise.
 */
export default function create(boardName, userName) {
  Log.info('Service : Boards : create', { boardName, userName });

  return this.dependencies.realtimeService.send(boardsMessages.doCreate, { boardName, userName })
    .then(({ boardId, boardName : joinedBoardName }) => {
      Log.debug('Service : Boards : create : ack', { boardId, joinedBoardName });

      // Check join data is correct
      if (!boardId || boardName !== joinedBoardName) {
        return Promise.reject(new BoardError(boardsErrors.generic));
      }

      // Add handlers for messages
      this.dependencies.realtimeService.setMessageHandlers();

      return { boardId, boardName };
    });
}
