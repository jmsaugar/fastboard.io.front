import io from 'socket.io-client';

import { boardsMessages } from '../constants';

const SOCKETIO_ENDPOINT = process.env.REACT_APP_SOCKETIO_ENDPOINT;

let socket;

/**
 * Initialize socket connection.
 */
const init = () => {
  if (!socket) {
    socket = io(SOCKETIO_ENDPOINT);
  }
}

const join = (boardId) => {
  socket.emit(boardsMessages.join, { boardId });

  socket.on(boardsMessages.meJoined, ({ boardId }) => {
    console.log('!!!.meJoined to ' + boardId);

    socket.on(boardsMessages.otherJoined, () => {
      console.log('!!!.otherJoined to ' + boardId);
    })
  });
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
  close,
};
