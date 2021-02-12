/**
 * Get the touch/click position given an event.
 *
 * Touchscreens and mouse clicks offer different information on this event,
 * hence this function to extract the proper information from it.
 *
 * @param {Object} event Touch/click event object.
 *
 * @returns {Object} Object containing the { top, left } coordinates of the event.
*/
export default function getTouchCoordinates(event) {
  // Touchscreen
  if (event?.event?.targetTouches?.[0]) {
    let top = event?.event?.targetTouches?.[0].pageY;
    let left = event?.event?.targetTouches?.[0].pageX;

    let element = event.event.targetTouches[0].target;
    while (element) {
      top -= element.offsetTop;
      left -= element.offsetLeft;

      element = element.offsetParent;
    }

    return { top, left };
  }

  // Mouse click
  return {
    top  : event.event.layerY,
    left : event.event.layerX,
  };
}
