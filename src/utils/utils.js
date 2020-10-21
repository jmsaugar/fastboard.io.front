/**
 * Throttles a function call.
 *
 * @param {Function} callback Function to be throttled.
 * @param {Integer} delay Throttle delay in milliseconds.
 *
 * @return {Function} Function that throttles the execution of the callback.
 */
export const throttle = (callback, delay = 0) => {
  let previousTime = new Date().getTime();

  return function throttledCallback(args) {
    const currentTime = new Date().getTime();

    if ((currentTime - previousTime) >= delay) {
      previousTime = currentTime;
      callback(...args);
    }
  };
};

/**
 * Creates a Promise with a rejection timeout.
 *
 * @param {Function} callback Function for the promise. Receives res and rej functions.
 * @param {Integer} timeout Timeout for the promise to be rejected in milliseconds.
 *
 * @return {Promise} Promise with rejection timeout.
 */
export const timeoutPromise = (callback, timeout) => new Promise(
  (res, rej) => {
    const timeoutId = setTimeout(() => rej(new Error()), timeout);

    callback(
      (...args) => {
        clearTimeout(timeoutId);
        res(...args);
      },
      (...args) => {
        clearTimeout(timeoutId);
        rej(new Error(...args));
      },
    );
  },
);
