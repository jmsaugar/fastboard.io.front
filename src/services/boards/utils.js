/**
 * Send boards event trough the network.
 *
 * @param {String} eventName Event key name.
 * @param {Object} data Data associated to the event.
 * @param {Function} ask Callback for server event acknowledgement.
 */
function send(eventName, data, ack) {
  this.socket.emit(eventName, data, ack);
}

/**
 * Check if the service is initialized.
 *
 * @return {Boolean} True if the service is initialized; false otherwise.
 */
function isInit() {
  return this.isInit;
}

export {
  isInit,
  send,
};
