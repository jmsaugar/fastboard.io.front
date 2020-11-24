import { Log } from '#utils';
import { boardsMessages } from '#constants';

/**
 * Send board name set request.
 *
 * @param {String} boardName New board name.
 *
 * @returns {Promise} Resolved if successful; rejected otherwise.
 */
export default function setBoardName(boardName) {
  Log.info('Service : Boards : setBoardName', { boardName });

  return this.dependencies.realtimeService.send(
    boardsMessages.doSetBoardName,
    boardName,
  );
}
