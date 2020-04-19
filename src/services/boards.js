import io from 'socket.io-client';

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

/**
 * Close socket connection.
 */
const close = () => {
  socket.close();
  socket = undefined;
};

export default {
  init,
  close,
};
