/**
 * Perform a resize operation (triggered by a remote user).
 *
 * @param {Object} selectedItem Object with selected item in drawings and map canvases.
 * @param {Number} scalingFactor Scaling factor to be applied to the item.
 * @param {Object} originPoint Point used as origin for dragging action.
 */
export default function resizeRemote({ drawings, map }, scalingFactor, originPoint) {
  if (!drawings || !map || !originPoint || scalingFactor === undefined) {
    return;
  }

  drawings.scale(scalingFactor, originPoint);
  map.scale(scalingFactor, originPoint);
}
