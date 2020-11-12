import io from 'socket.io-client';

import { Log, timeoutPromise } from '#utils';
import { boardsMessages, drawingsMessages } from '#constants';

const socketIOEndpoint = process.env.REACT_APP_SOCKETIO_ENDPOINT;
const timeout = 5000; // @todo to constants?

/**
 * Inject service dependencies.
 *
 * @param {Object} params Dependencies { boardsService, drawingsService }.
 *
 * @throws {Error} In case dependencies are not passed.
 */
function injectDependencies({ boardsService, drawingsService }) {
  Log.info('Services : Realtime : injectDependencies', { boardsService, drawingsService });

  if (!boardsService || !drawingsService) {
    throw new Error('Services : Realtime : injectDependencies : missing dependencies');
  }

  this.dependencies = {
    boardsService,
    drawingsService,
  };
}

/**
 * Start socket connection.
 */
function start() {
  Log.info('Services : Realtime : start');

  if (!this.isStarted) {
    this.socket = io(socketIOEndpoint); // @todo check possible errors
    this.isStarted = true;

    Log.debug('Service : Realtime : start : started');
  }
}

/**
 * Close socket connection.
 */
function stop() {
  Log.info('Service : Realtime : stop');

  if (this.socket) {
    this.socket.close();
  }

  this.socket = undefined;
  this.isStarted = false;
}

/**
 * Set message handlers for boards and drawings.
 */
function setMessageHandlers() {
  Log.info('Services : Realtime : setMessageHandlers');

  const { boardsService, drawingsService } = this.dependencies;

  // Add handlers for board messages
  this.socket.on(boardsMessages.didJoin, boardsService.onDidJoin);
  this.socket.on(boardsMessages.didLeave, boardsService.onDidLeave);
  this.socket.on(boardsMessages.didSetUserName, boardsService.onDidSetUserName);
  this.socket.on(boardsMessages.didSetBoardName, boardsService.onDidSetBoardName);

  // Add handlers for drawings messages
  this.socket.on(drawingsMessages.didMouseDown, drawingsService.onMouseDown);
  this.socket.on(drawingsMessages.didMouseDrag, drawingsService.onMouseDrag);
}

/**
 * Send boards event trough the network.
 *
 * Includes a timeout that makes the returned promise be rejected if reached.
 *
 * @param {String} eventName Event key name.
 * @param {Object} data Data associated to the event.
 *
 * @return {Promise} Resolved with the server ack if succesful request; rejected otherwise.
 */
function send(eventName, data) {
  return timeoutPromise(
    (res, rej) => (
      this.socket.emit(
        eventName,
        data,
        (success, receivedData) => (success ? res(receivedData) : rej(receivedData)),
      )
    ),
    timeout,
  );
}

/**
 * Check if the service is started.
 *
 * @return {Boolean} True if the service is started; false otherwise.
 */
function isStarted() {
  return this.isStarted;
}

export {
  injectDependencies,
  start,
  stop,
  setMessageHandlers,
  send,
  isStarted,
};
