/**
 * Convert a Paper.js Point to a simpler representation
 * to be sent through the network.
 *
 * @see http://paperjs.org/reference/point/
 *
 * @throws {Error} In case of invalid point.
 *
 * @param {Object} point Paperjs point
 *
 * @returns {Object} { x, y }
 */
export default function point2net(point) {
  if (!point) { // @todo improve this check?
    throw new Error('Not a valid point');
  }

  return { x : point.x, y : point.y };
}
