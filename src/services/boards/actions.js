import io from 'socket.io-client';

import { boardsMessages, boardsErrors, drawingsMessages } from '#constants';
import { Log, timeoutPromise } from '#utils';

import drawingsService from '../drawings';
import { send } from './utils';
import {
  onDidJoin,
  onDidLeave,
  onDidSetUserName,
  onDidSetBoardName,
} from './handlers';

const socketIOEndpoint = process.env.REACT_APP_SOCKETIO_ENDPOINT;
const timeout = 5000; // @todo to constants?

/**
 * Initialize socket connection.
 */
function init() {
  Log.info('Service : Boards : init');

  if (!this.socket) {
    this.socket = io(socketIOEndpoint);
    this.isInit = true;

    Log.debug('Service : Boards : init : initialized');
  }
}

/**
 * Close socket connection.
 */
function close() {
  Log.info('Service : Boards : close');

  this.socket.close();
  this.socket = undefined;
  this.isInit = false;
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

  return timeoutPromise((res, rej) => send.call(
    this,
    boardsMessages.doCreate,
    { boardName, userName },
    (success, {
      boardId,
      boardName : joinedBoardName,
      errorCode,
    }) => {
      Log.debug('Service : Boards : create : ack', {
        success, boardId, joinedBoardName, errorCode,
      });

      // Check if correct operation
      if (!success) {
        return rej(errorCode);
      }

      // Check join data is correct
      if (!boardId || boardName !== joinedBoardName) {
        return rej(boardsErrors.generic);
      }

      // Add handlers for board messages
      this.socket.on(boardsMessages.didJoin, onDidJoin.bind(this));
      this.socket.on(boardsMessages.didLeave, onDidLeave.bind(this));
      this.socket.on(boardsMessages.didSetUserName, onDidSetUserName.bind(this));
      this.socket.on(boardsMessages.didSetBoardName, onDidSetBoardName.bind(this));

      // Add handlers for drawings messages
      this.socket.on(drawingsMessages.didSetTool, drawingsService.onToolSet);
      this.socket.on(drawingsMessages.onMouseDown, drawingsService.onMouseDown);
      this.socket.on(drawingsMessages.onMouseDrag, drawingsService.onMouseDrag);

      return res({ boardId, boardName });
    },
  ), timeout);
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
  return timeoutPromise((res, rej) => send.call(
    this,
    boardsMessages.doJoin,
    { boardId, userName },
    (success, {
      boardId : joinedBoardId, boardName, users, errorCode,
    }) => {
      // Board join ack received
      Log.debug('Service : Boards : join : ack', {
        success, joinedBoardId, boardName, users, errorCode,
      });

      // Check if correct join
      if (!success) {
        return rej(errorCode);
      }

      // Check join data is correct
      if (!boardName || boardId !== joinedBoardId) {
        return rej(boardsErrors.generic);
      }

      // Add handlers for board messages
      this.socket.on(boardsMessages.didJoin, onDidJoin.bind(this));
      this.socket.on(boardsMessages.didLeave, onDidLeave.bind(this));
      this.socket.on(boardsMessages.didSetUserName, onDidSetUserName.bind(this));
      this.socket.on(boardsMessages.didSetBoardName, onDidSetBoardName.bind(this));

      // Add handlers for drawings messages
      this.socket.on(drawingsMessages.didSetTool, drawingsService.onToolSet);
      this.socket.on(drawingsMessages.onMouseDown, drawingsService.onMouseDown);
      this.socket.on(drawingsMessages.onMouseDrag, drawingsService.onMouseDrag);

      // this.socket.on(drawingsMessages.didSetTool, (data) => {
      //   Log.debug('Service : Boards : onSetTool', { data }); // { userId, tool }
      // });
      // this.socket.on(drawingsEvents.onMouseDown, ({ userId, point, color }) => {
      //   console.log('!!!.RECEIVED.onMouseDown');
      //   drawingsService.onMouseDown(point, color);
      // });

      // this.socket.on(drawingsEvents.onMouseDrag, ({ userId, point }) => {
      //   console.log('!!!.RECEIVED.onMouseDrag');
      //   drawingsService.onMouseDrag(point);
      // });

      return res({ boardId, boardName, users });
    },
  ), timeout);
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

  return timeoutPromise(
    (res, rej) => send.call(
      this,
      boardsMessages.doSetUserName,
      userName,
      (success) => (success ? res() : rej()),
    ),
    timeout,
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

  return timeoutPromise(
    (res, rej) => send.call(
      this,
      boardsMessages.doSetBoardName,
      boardName,
      (success) => (success ? res() : rej()),
    ),
    timeout,
  );
}

function setTool(tool) {
  send.call(this, drawingsMessages.doSetTool, { tool });
}

export {
  init,
  close,
  create,
  join,
  setUserName,
  setBoardName,
  setTool,
};
