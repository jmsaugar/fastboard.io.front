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
    socket.on(drawingsEvents.onMouseDown, ({ userId, data }) => {
      console.log('!!!.RECEIVED.onMouseDown');
      drawingsService.onMouseDown(data);
    });

    socket.on(drawingsEvents.onMouseDrag, ({ userId, data }) => {
      console.log('!!!.RECEIVED.onMouseDrag');
      drawingsService.onMouseDrag(data);
    });
  });
};

const send = (event, data) => {
  console.log('!!!.data');
  socket.emit(event, { point : data.point });
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
