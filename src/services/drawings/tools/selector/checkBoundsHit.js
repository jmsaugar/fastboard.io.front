const boundsHitType = 'bounds';

/**
 * Check if the given point hits the bounds of the given item.
 *
 * @param {Object} item Item to check bounds hits against.
 * @param {Object} point Point to check bounds hit with.
 *
 * @returns {(String|Boolean)} String indicating bound corner hit; false if no hit.
 */
export default function checkBoundsHit(item, point) {
  if (!item) {
    return false;
  }

  // @todo better hit test against the whole project and check if the first is the selected item?
  const hit = item.hitTest(point, {
    fill      : false,
    bounds    : true,
    stroke    : true,
    tolerance : 5,
  });

  if (!hit || hit.type !== boundsHitType) {
    return false;
  }

  return hit.name;
}
