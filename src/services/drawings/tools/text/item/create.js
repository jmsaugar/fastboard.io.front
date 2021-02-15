import { PointText } from 'paper';

import { textToolFontSize } from '#constants';

/**
 * Create a text item in the given parent project.
 *
 * @param {Object} point Position of the item.
 * @param {String} fillColor Color of the text.
 * @param {String} name Name of the item to be uniquely identified.
 * @param {Object} parent Project to associate the item to.
 * @param {Boolean} visible Wether the item is visible or not.
 *
 * @returns {Object} Paperjs PointText item.
 */
export default function create(point, fillColor, name, parent, visible = true) {
  return new PointText({
    /**
     * Point Y has to be moved the same size as the font, as the PointText item
     * uses bottom-left point as reference, while we want to use top-left.
     */
    point    : { x : point.x, y : point.y + textToolFontSize },
    fontSize : textToolFontSize,
    locked   : true,
    name,
    parent,
    fillColor,
    visible,
  });
}
