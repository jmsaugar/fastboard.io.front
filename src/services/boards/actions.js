import io from 'socket.io-client';

import { Log, timeoutPromise } from '../../utils';
// import drawingsService from '../drawings';
import { boardsMessages, drawingsEvents } from '../../constants';

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
    Log.debug('Service : Boards : init : initialized');
    this.socket = io(socketIOEndpoint);
    this.isInit = true;
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
 * Join a board. If no board id is specified, board is created.
 *
 * Includes all the events attaching logic.
 *
 * @param {Object} data {boardId, boardName, userName}
 *
 * @return {Promise} Resolves when the board has been joined; rejected otherwise.
 */
function join(data) {
  Log.info('Service : Boards : join', data);

  return timeoutPromise((res, rej) => send.call(
    this,
    boardsMessages.doJoin,
    data,
    (success, { boardId, users }) => {
      Log.debug('Service : Boards : join : ack', { success, boardId, users });

      if (!success || (data.boardId && (data.boardId !== boardId))) {
        return rej();
      }

      this.socket.on(boardsMessages.didJoin, onDidJoin.bind(this));
      this.socket.on(boardsMessages.didLeave, onDidLeave.bind(this));
      this.socket.on(boardsMessages.didSetUserName, onDidSetUserName.bind(this));
      this.socket.on(boardsMessages.didSetBoardName, onDidSetBoardName.bind(this));

      // Drawings events
      // this.socket.on(drawingsEvents.onMouseDown, ({ userId, point, color }) => {
      //   console.log('!!!.RECEIVED.onMouseDown');
      //   drawingsService.onMouseDown(point, color);
      // });

      // this.socket.on(drawingsEvents.onMouseDrag, ({ userId, point }) => {
      //   console.log('!!!.RECEIVED.onMouseDrag');
      //   drawingsService.onMouseDrag(point);
      // });

      // @todo do something with users

      return res(boardId);
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
const setUserName = (userName) => {
  Log.info('Service : Boards : setUserName', { userName });

  return timeoutPromise(
    (res, rej) => send(
      boardsMessages.doSetUserName,
      userName,
      (success) => (success ? res() : rej()),
    ),
    timeout,
  );
};

/**
 * Send board name set request.
 *
 * @param {String} boardName New board name.
 *
 * @return {Promise} Resolved if successful; rejected otherwise.
 */
const setBoardName = (boardName) => {
  Log.info('Service : Boards : setBoardName', { boardName });

  return timeoutPromise(
    (res, rej) => send(
      boardsMessages.doSetBoardName,
      boardName,
      (success) => (success ? res() : rej()),
    ),
    timeout,
  );
};

export {
  init,
  close,
  join,
  setUserName,
  setBoardName,
};
