/**
 * Perform a rotation operation (triggered by the local user).
 *
 * @param {Object} selectedItem Object with selected item in drawings and map canvases.
 * @param {Number} currentAngle Rotation angle currently set on the selected item.
 * @param {Object} destinationPoint Current point dragged to by the user cursor.
 *
 * @return {Number} Angle of rotation of the selected item compared to the original state.
 */
export default function rotateLocal({ drawings, map }, currentAngle, destinationPoint) {
  // Calculate new rotation angle
  const p1 = drawings.bounds.topLeft.subtract(drawings.bounds.center);
  const p2 = destinationPoint.subtract(drawings.bounds.center);
  const newRotationAngle = p1.getDirectedAngle(p2);

  // Apply new rotation angle to selected item
  drawings.rotate(newRotationAngle - currentAngle, drawings.bounds.center);

  // Apply new rotation angle to selected item in map
  map.rotate(newRotationAngle - currentAngle, map.bounds.center);

  // New rotation angle is return in case a new rotation is performed
  return newRotationAngle;
}
