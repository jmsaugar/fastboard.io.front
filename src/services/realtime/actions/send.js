import { timeoutPromise, BoardError } from '#utils';

const timeout = 5000; // @todo to constants?

/**
 * Send boards event trough the network.
 *
 * Includes a timeout that makes the returned promise be rejected if reached.
 *
 * @param {String} eventName Event key name.
 * @param {Object} data Data associated to the event.
 *
 * @returns {Promise} Resolved with the server ack if succesful request; rejected otherwise.
 */
export default function send(eventName, data) {
  return timeoutPromise(
    (res, rej) => (
      this.socket.emit(
        eventName,
        data,
        (success, receivedData) => (
          success ? res(receivedData) : rej(new BoardError(receivedData?.code))
        ),
      )
    ),
    timeout,
  );
}
