import { rotateSelectionHandlers } from '../../utils';

/**
 * Perform a rotation operation. The rotation has to be done on both the
 * item itself and the item that displays the manipulation handlers.
 *
 * @param {Number} currentRotationAngle Rotation angle currently set on the selected item.
 * @param {Object} targetPoint Current point dragged to by the user cursor.
 * @param {Object} selectedItem Actual item to be translated.
 * @param {Object} handlersItem Handlers item.
 *
 * @return {Number} Angle of rotation of the selected item compared to the original state.
 */
export default function rotate(currentRotationAngle, targetPoint, selectedItem, handlersItem) {
  // @todo review this whole function
  selectedItem.rotate(-1 * currentRotationAngle, selectedItem.bounds.center);

  // Calculate new rotation angle
  const p1 = selectedItem.bounds.topLeft.subtract(selectedItem.bounds.center);
  const p2 = targetPoint.subtract(selectedItem.bounds.center);
  const newRotationAngle = p1.getDirectedAngle(p2);

  // Apply new rotation angle to both selected item and handlers item
  selectedItem.rotate(newRotationAngle, selectedItem.bounds.center);
  rotateSelectionHandlers(handlersItem, newRotationAngle - currentRotationAngle);

  // New rotation angle is return in case a new rotation is performed
  return newRotationAngle;
}
