import { rotateSelectionHandlers } from '../../utils';

/**
 * Perform a rotation operation. The rotation has to be done on both the
 * item itself and the item that displays the manipulation handlers.
 *
 * @param {Number} currentRotationAngle Rotation angle currently set on the selected item.
 * @param {Object} targetPoint Current point dragged to by the user cursor.
 * @param {Object} selectedItem Actual items to be translated - in drawing canvas and map.
 * @param {Object} handlersItem Handlers item.
 *
 * @return {Number} Angle of rotation of the selected item compared to the original state.
 */
export default function rotate(currentRotationAngle, targetPoint, selectedItem, handlersItem) {
  // @todo review this whole function
  selectedItem.drawings.rotate(-1 * currentRotationAngle, selectedItem.drawings.bounds.center);
  selectedItem.map.rotate(-1 * currentRotationAngle, selectedItem.map.bounds.center);

  // Calculate new rotation angle
  const p1 = selectedItem.drawings.bounds.topLeft.subtract(selectedItem.drawings.bounds.center);
  const p2 = targetPoint.subtract(selectedItem.drawings.bounds.center);
  const newRotationAngle = p1.getDirectedAngle(p2);

  // Apply new rotation angle to selected item and handlers item
  selectedItem.drawings.rotate(newRotationAngle, selectedItem.drawings.bounds.center);
  rotateSelectionHandlers(handlersItem, newRotationAngle - currentRotationAngle);

  // Apply new rotation angle to selected item in map
  selectedItem.map.rotate(newRotationAngle, selectedItem.map.bounds.center);

  // New rotation angle is return in case a new rotation is performed
  return newRotationAngle;
}
