import io from 'socket.io-client';

import { Log } from '#utils';

const socketIOEndpoint = process.env.REACT_APP_SOCKETIO_ENDPOINT;

/**
 * Start socket connection.
 */
export default function start() {
  Log.info('Service : Realtime : start');

  if (!this.isStarted) {
    this.socket = io( // @todo check possible errors
      socketIOEndpoint,
      { path : process.env.REACT_APP_SOCKETIO_PATH },
    );
    this.isStarted = true;

    Log.debug('Service : Realtime : start : started');
  }
}
