import { Log } from '#utils';

/**
 * Close socket connection.
 */
export default function stop() {
  Log.info('Service : Realtime : stop');

  if (this.socket) {
    this.socket.close();
  }

  this.socket = undefined;
  this.isStarted = false;
}
