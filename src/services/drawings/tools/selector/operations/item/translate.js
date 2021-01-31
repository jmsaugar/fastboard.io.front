/**
 * Perform a translation operation. The translation has to be done on both the
 * item itself and the item that displays the manipulation handlers.
 *
 * @param {Object} selectedItem Object with selected item in drawings and map canvases.
 * @param {Object} originPoint Point used as origin for dragging action.
 * @param {Object} destinationPoint Current point dragged to by the user cursor.
 */
export default function translate({ drawings, map }, originPoint, destinationPoint) {
  if (!drawings || !map) {
    return;
  }

  drawings.translate(destinationPoint.subtract(originPoint));
  map.translate(destinationPoint.subtract(originPoint));
}
