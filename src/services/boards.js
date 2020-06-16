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

// @todo promisify this
const join = (boardId) => {
  socket.emit(boardsMessages.join, { boardId });

  socket.on(boardsMessages.meJoined, ({ boardId, users }) => {
    console.log('!!!.meJoined to ' + boardId, users);

    socket.on(boardsMessages.otherJoined, () => {
      console.log('!!!.otherJoined to ' + boardId);
    });

    socket.on(boardsMessages.otherLeft, ({ userId }) => {
      console.log('!!!.otherLeft ' + boardId, userId);
    });
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
