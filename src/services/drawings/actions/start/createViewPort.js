import { Path, Point } from 'paper';

import { mapLayers, mapViewPortColorCode, viewPortItemName } from '#constants';
import store, { setMapDragging } from '#store';

const borderWidth = 10;

/**
 * Create navigation map viewport item.
 *
 * @param {Object} center Center point of the drawings project view.
 * @param {Number} width Width of the drawings canvas.
 * @param {Number} height Height of the drawings canvas.
 * @param {Object} project Paperjs navigation map project.
 *
 * @returns {Object} Viewport item object.
 */
export default function createViewPort(center, width, height, project) {
  const viewPort = new Path.Rectangle({
    name    : viewPortItemName,
    topLeft : new Point(
      center.x - (width / 2),
      center.y - (height / 2),
    ),
    bottomRight : new Point(
      center.x + (width / 2),
      center.y + (height / 2),
    ),
    strokeColor   : mapViewPortColorCode,
    fillColor     : mapViewPortColorCode,
    strokewidth   : borderWidth,
    strokeScaling : false,
    position      : center,
    parent        : project.layers[mapLayers.viewport],
  });

  // This will allow for cursor change when hovering on the viewport item.
  viewPort.onMouseEnter = () => store.dispatch(setMapDragging(true));
  viewPort.onMouseLeave = () => store.dispatch(setMapDragging(false));

  return viewPort;
}
