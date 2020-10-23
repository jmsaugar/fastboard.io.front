import io from 'socket.io-client';

// import drawingsService from '../drawings';
import { boardsMessages, drawingsEvents } from '../../constants';

import { timeoutPromise } from '../../utils';

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
  if (!this.socket) {
    this.socket = io(socketIOEndpoint);
    this.isInit = true;
  }
}

/**
 * Close socket connection.
 */
function close() {
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
  return timeoutPromise((res, rej) => send.call(
    this,
    boardsMessages.doJoin,
    data,
    (success, { boardId, users }) => {
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
const setUserName = (userName) => timeoutPromise(
  (res, rej) => send(
    boardsMessages.doSetUserName,
    userName,
    (success) => (success ? res() : rej()),
  ),
  timeout,
);

/**
 * Send board name set request.
 *
 * @param {String} boardName New board name.
 *
 * @return {Promise} Resolved if successful; rejected otherwise.
 */
const setBoardName = (boardName) => timeoutPromise(
  (res, rej) => send(
    boardsMessages.doSetBoardName,
    boardName,
    (success) => (success ? res() : rej()),
  ),
  timeout,
);

export {
  init,
  close,
  join,
  setUserName,
  setBoardName,
};
