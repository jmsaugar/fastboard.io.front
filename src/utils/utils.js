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

  return function() {
    const currentTime = new Date().getTime();

    if ((currentTime - previousTime) >= delay) {
      previousTime = currentTime;
      callback.apply(null, arguments);
    }
  };
};
