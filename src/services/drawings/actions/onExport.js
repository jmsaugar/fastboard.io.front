/**
 * Due to interacting with Paper.js implementation details,
 * some linting rules will have to be disabled here.
 */
/* eslint-disable no-underscore-dangle, no-param-reassign */

/**
 * Fix for the Paper.js issue of not correctly exporting
 * multi-line text items to SVG image.
 *
 * This function will overwrite Paper.s "onExport" function on "exportSVG" call.
 * @see http://paperjs.org/reference/pointtext/#exportsvg
 *
 * Github bug.
 * @see https://github.com/paperjs/paper.js/issues/988
 *
 * @param {Object} item Item project to be processed.
 * @param {Object} node SVG node resulting from processed item.
 *
 * @returns {Object} SVG node resulting from processed item.
 */
export default function (item, node) {
  if (item._class === 'PointText') {
    node.textContent = null;

    for (let i = 0; i < item._lines.length; i += 1) {
      const tspan = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'tspan',
      );

      tspan.textContent = `\u200b${item._lines[i]}`;
      tspan.setAttributeNS(null, 'x', node.getAttribute('x'));
      tspan.setAttributeNS(null, 'dy', i === 0 ? 0 : item.leading);

      node.appendChild(tspan);
    }
  }
  return node;
}
