/**
 * Throttles a function call.
 *
 * @param {Function} callback Function to be throttled.
 * @param {Integer} delay Throttle delay in milliseconds.
 *
 * @return {Function} Function that throttles the execution of the callback.
 */
export default function throttle(callback, delay = 0) {
  let previousTime = new Date().getTime();

  return function throttledCallback(...args) {
    const currentTime = new Date().getTime();

    if ((currentTime - previousTime) >= delay) {
      previousTime = currentTime;
      callback(...args);
    }
  };
}
