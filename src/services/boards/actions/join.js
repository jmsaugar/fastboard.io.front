import { Log } from '#utils';
import { boardsMessages, boardsErrors } from '#constants';

/**
 * Join a board.
 *
 * Includes all the events attaching logic.
 *
 * @param {String} boardId Id of the board.
 * @param {String} userName Name of the user.
 *
 * @returns {Promise} Resolved when the board has been joined; rejected otherwise.
 */
export default function join(boardId, userName) {
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
