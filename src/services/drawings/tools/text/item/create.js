import { PointText } from 'paper';

const fontSize = 18;

/**
 * Create a text item in the given parent project.
 *
 * @param {Object} point Position of the item.
 * @param {String} fillColor Color of the text.
 * @param {String} name Name of the item to be uniquely identified.
 * @param {Object} parent Project to associate the item to.
 *
 * @returns {Object} Paperjs PointText item.
 */
export default function create(point, fillColor, name, parent) {
  return new PointText({
    point,
    name,
    parent,
    fillColor,
    fontSize,
    locked : true,
  });
}
