const unloadEvent = 'beforeunload';

/**
 * Callback used when the unload event is triggered by the browser
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
 *
 * @param {Object} evt Page unload event.
 */
const preventUnload = (evt) => {
  evt.preventDefault();
  evt.returnValue = ''; // eslint-disable-line no-param-reassign
};

/**
 * Set the page unload prevention behaviour.
 *
 * @param {Boolean} active If true, page unload prevention is enabled; if false, it is disabled.
 */
export default function setPreventUnload(active) {
  if (active) {
    window.addEventListener(unloadEvent, preventUnload);
  } else {
    window.removeEventListener(unloadEvent, preventUnload);
  }
}
