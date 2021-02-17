/**
 * Perform a rotation operation (triggered by a remote user).
 *
 * @param {Object} selectedItems Object containing the drawings and map item to be rotated.
 * @param {Number} angle Angle of rotation.
 */
export default function rotateRemote({ drawings, map }, angle) {
  if (!drawings || !map || angle === undefined) {
    return;
  }

  drawings.rotate(angle);
  map.rotate(angle);
}
