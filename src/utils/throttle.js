/**
 * Throttles a function call.
 *
 * @param {Function} callback Function to be throttled.
 * @param {Number} delay Throttle delay in milliseconds.
 *
 * @returns {Function} Function that throttles the execution of the callback.
 */
export default function throttle(callback, delay = 0) {
  let previousTime;

  return function throttledCallback(...args) {
    const currentTime = new Date().getTime();

    if (previousTime === undefined || (currentTime - previousTime) >= delay) {
      previousTime = currentTime;
      callback(...args);
    }
  };
}
