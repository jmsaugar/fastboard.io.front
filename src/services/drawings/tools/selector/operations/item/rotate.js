/**
 * Perform a rotation operation.
 *
 * @param {Object} selectedItem Object with selected item in drawings and map canvases.
 * @param {Number} currentAngle Rotation angle currently set on the selected item.
 * @param {Object} destinationPoint Current point dragged to by the user cursor.
 *
 * @return {Number} Angle of rotation of the selected item compared to the original state.
 */
export default function rotate({ drawings, map }, currentAngle, destinationPoint) {
  // @todo review this whole function
  drawings.rotate(-1 * currentAngle, drawings.bounds.center);
  map.rotate(-1 * currentAngle, map.bounds.center);

  // Calculate new rotation angle
  const p1 = drawings.bounds.topLeft.subtract(drawings.bounds.center);
  const p2 = destinationPoint.subtract(drawings.bounds.center);
  const newRotationAngle = p1.getDirectedAngle(p2);

  // Apply new rotation angle to selected item
  drawings.rotate(newRotationAngle, drawings.bounds.center);

  // Apply new rotation angle to selected item in map
  map.rotate(newRotationAngle, map.bounds.center);

  // New rotation angle is return in case a new rotation is performed
  return newRotationAngle;
}
