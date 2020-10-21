import io from 'socket.io-client';

import drawingsService from './drawings';
import { boardsMessages, drawingsEvents } from '../constants';
import { timeoutPromise } from '../utils/utils';

const socketIOEndpoint = process.env.REACT_APP_SOCKETIO_ENDPOINT;
const timeout = 5000; // @todo to constants?

let socket;

let currentBoardId;

/**
 * Initialize socket connection.
 */
const init = () => {
  if (!socket) {
    socket = io(socketIOEndpoint);
  }
};

/**
 * Join a board.
 *
 * Includes all the events attaching logic.
 *
 * @param {Integer} boardId Id of the board to be joined.
 *
 * @return {Promise} Resolves when the board has been joined; rejected otherwise.
 */
const join = (boardId) => timeoutPromise((res, rej) => {
  send(boardsMessages.doJoin, { boardId }, (success, { boardId : joinedBoardId, users }) => {
    if (!success || joinedBoardId !== boardId) {
      return rej();
    }

    console.log('!!!.meJoined to ' + boardId, users);
    currentBoardId = boardId;

    socket.on(boardsMessages.didJoin, () => {
      console.log('!!!.otherJoined to ' + boardId);
    });

    socket.on(boardsMessages.didLeave, ({ userId }) => {
      console.log('!!!.otherLeft ' + boardId, userId);
    });

    socket.on(boardsMessages.didSetUserName, ({ userId, userName }) => {
      console.log('!!!.userSetName', userId, userName);
    });

    // Drawings events
    socket.on(drawingsEvents.onMouseDown, ({ userId, point, color }) => {
      console.log('!!!.RECEIVED.onMouseDown');
      drawingsService.onMouseDown(point, color);
    });

    socket.on(drawingsEvents.onMouseDrag, ({ userId, point }) => {
      console.log('!!!.RECEIVED.onMouseDrag');
      drawingsService.onMouseDrag(point);
    });

    return res();
  });
}, timeout);

/**
 * Send boards event trough the network.
 *
 * @param {String} eventName Event key name.
 * @param {Object} data Data associated to the event.
 * @param {Function} ask Callback for server event acknowledgement.
 */
const send = (eventName, data, ack) => {
  socket.emit(eventName, data, ack);
};

/**
 * Close socket connection.
 */
const close = () => {
  socket.close();
  socket = undefined;
};

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

export default {
  init,
  join,
  send, // @todo maybe not exposing this, but other functions
  close,
  setUserName,
  setBoardName,
};
