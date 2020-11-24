import { useCallback, useEffect } from 'react';

const clickEvent = 'mousedown';

/**
 * Listen to clicks outside of the component with the given reference.
 *
 * @param {Object} ref Reference for the component.
 * @param {Function} callback Function to be executed when the outside click happens.
 */
const useOutsideClick = (ref, callback) => {
  const clickListener = useCallback(
    (e) => {
      if (!ref?.current?.contains(e.target) && typeof callback === 'function') {
        callback();
      }
    },
    [ref, callback],
  );

  useEffect(
    () => {
      document.addEventListener(clickEvent, clickListener);
      return () => document.removeEventListener(clickEvent, clickListener);
    },
    [clickListener],
  );
};

export default useOutsideClick;
