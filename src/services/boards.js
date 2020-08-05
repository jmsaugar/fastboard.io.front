import io from 'socket.io-client';

import drawingsService from './drawings';
import { boardsMessages, drawingsEvents } from '../constants';

const SOCKETIO_ENDPOINT = process.env.REACT_APP_SOCKETIO_ENDPOINT;

let socket;

let currentBoardId;

/**
 * Initialize socket connection.
 */
const init = () => {
  if (!socket) {
    socket = io(SOCKETIO_ENDPOINT);
    window.socket = socket;
    window.io = io;
  }
}

// @todo promisify this
const join = (boardId) => {
  socket.emit(boardsMessages.join, { boardId });

  socket.on(boardsMessages.meJoined, ({ boardId, users }) => {
    console.log('!!!.meJoined to ' + boardId, users);
    currentBoardId = boardId;

    socket.on(boardsMessages.otherJoined, () => {
      console.log('!!!.otherJoined to ' + boardId);
    });

    socket.on(boardsMessages.otherLeft, ({ userId }) => {
      console.log('!!!.otherLeft ' + boardId, userId);
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
  });
};

/**
 * Send boards event trough the network.
 * 
 * @param {String} eventName Event key name.
 * @param {Object} data Data associated to the event. 
 */
const send = (eventName, data) => {
  socket.emit(eventName, data);
};

/**
 * Close socket connection.
 */
const close = () => {
  socket.close();
  socket = undefined;
};

export default {
  init,
  join,
  send,
  close,
};
