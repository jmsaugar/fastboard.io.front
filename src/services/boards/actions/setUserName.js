import { Log } from '#utils';
import { boardsMessages } from '#constants';

/**
 * Send user name set request.
 *
 * @param {String} userName New user name.
 *
 * @returns {Promise} Resolved if successful; rejected otherwise.
 */
export default function setUserName(userName) {
  Log.info('Service : Boards : setUserName', { userName });

  return this.dependencies.realtimeService.send(
    boardsMessages.doSetUserName,
    userName,
  );
}
