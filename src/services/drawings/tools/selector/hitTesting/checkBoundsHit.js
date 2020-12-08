import { Shape } from 'paper';

/**
 * Check if the given point hits the bounds of the given item.
 *
 * @param {Object} handlersItem Item to check bounds hits against.
 * @param {Object} point Point to check bounds hit with.
 *
 * @returns {(String|Boolean)} String indicating bound corner hit; false if no hit.
 */
export default function checkBoundsHit(handlersItem, point) {
  if (!handlersItem?.children?.length) {
    return false;
  }

  const hits = handlersItem.hitTestAll(point, {
    class     : Shape,
    fill      : true,
    stroke    : true,
    tolerance : 1,
  });

  if (!hits?.length) {
    return false;
  }

  return hits[0].item.name;
}
