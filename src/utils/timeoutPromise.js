import TimeoutError from './TimeoutError';

/**
 * Creates a Promise with a rejection timeout.
 *
 * @param {Function} callback Function for the promise. Receives res and rej functions.
 * @param {Number} timeout Timeout for the promise to be rejected in milliseconds.
 *
 * @returns {Promise} Promise with rejection timeout.
 */
export default function timeoutPromise(callback, timeout) {
  return new Promise(
    (res, rej) => {
      const timeoutId = setTimeout(() => rej(new TimeoutError()), timeout);

      callback(
        (value) => {
          clearTimeout(timeoutId);
          res(value);
        },
        (error) => {
          clearTimeout(timeoutId);
          rej(error);
        },
      );
    },
  );
}
