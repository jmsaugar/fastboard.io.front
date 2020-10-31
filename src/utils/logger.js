const debugColor = 'grey';

let prefix;
let config = {
  all     : false,
  info    : true,
  warning : false,
  error   : false,
  debug   : false,
};

/**
 * Create a log message.
 *
 * @param {String} message Message to be logged.
 * @param {String} color HTML color code for the message text.
 *
 * @return {Array<String>} Formatted log message.
 */
const createMessage = (message, color) => {
  if (!message) {
    throw new Error('Logger invoked with no message');
  }

  const colorStyle = color ? `color: ${color};` : undefined;

  return [
    `%c[${prefix}] %c${message}`,
    `font-weight: bold; ${colorStyle}`,
    colorStyle,
  ];
};

/**
 * Set logging config.
 *
 * @param {Object} newConfig New logging configuration.
 */
const setConfig = (newConfig) => {
  config = { ...config, ...newConfig };
};

/**
 * Initialize logging util.
 *
 * @param {String} newPrefix Log messages prefix.
 * @param {Object} newConfig Logging configuration.
 */
const init = (newPrefix, newConfig) => {
  prefix = newPrefix;
  setConfig(newConfig);
};

/**
 * Log an info message.
 *
 * @param {String} message Log message.
 * @param  {...any} params Extra parameters to include in log message.
 */
const info = (message, ...params) => {
  if (config.all || config.info) {
    // eslint-disable-next-line no-console
    console.info(...createMessage(message), ...params);
  }
};

/**
 * Log an warning message.
 *
 * @param {String} message Log message.
 * @param  {...any} params Extra parameters to include in log message.
 */
const warning = (message, ...params) => {
  if (config.all || config.warning) {
    // eslint-disable-next-line no-console
    console.warn(...createMessage(message), ...params);
  }
};

/**
 * Log an error message.
 *
 * @param {String} message Log message.
 * @param  {...any} params Extra parameters to include in log message.
 */
const error = (message, ...params) => {
  if (config.all || config.error) {
    // eslint-disable-next-line no-console
    console.error(...createMessage(message), ...params);
  }
};

/**
 * Log an debug message.
 *
 * @param {String} message Log message.
 * @param  {...any} params Extra parameters to include in log message.
 */
const debug = (message, ...params) => {
  if (config.all || config.debug) {
    // eslint-disable-next-line no-console
    console.debug(...createMessage(message, debugColor), ...params);
  }
};

export default {
  init,
  setConfig,
  info,
  warning,
  error,
  debug,
};
