import { useCallback, useEffect } from 'react';

const keyEvent = 'keyup';

/**
 * Listen to the use of a certain key and trigger the callback when used.
 *
 * @see https://developer.mozilla.org/es/docs/Web/API/KeyboardEvent/key/Key_Values
 *
 * @param {String} keyCode Key code to be listened to.
 * @param {Function} callback Function to be executed when the key is used.
 */
const useKey = (keyCode, callback) => {
  const keyListener = useCallback(
    (e) => {
      if (e.key === keyCode && typeof callback === 'function') {
        callback();
      }
    },
    [keyCode, callback],
  );

  useEffect(() => {
    document.addEventListener(keyEvent, keyListener);
    return () => document.removeEventListener(keyEvent, keyListener);
  }, [keyListener]);
};

export default useKey;
