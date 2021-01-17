import { Path, Point } from 'paper';

import { mapViewPortColorCode } from '#constants';
import store, { setMapDragging } from '#store';
/**
 * Setup Paper project used for canvas navigation map.
 *
 * @param {Object} center Center point of the drawings project view.
 * @param {Number} width Width of the drawings canvas.
 * @param {Number} height Height of the drawings canvas.
 * @param {Object} project Paperjs navigation map project.
 */
export default function createViewPort(center, width, height, project) {
  const viewPort = new Path.Rectangle({
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
    strokewidth   : 10, // @todo
    strokeScaling : false,
    position      : center,
    parent        : project.activeLayer,
  });

  viewPort.onMouseEnter = () => store.dispatch(setMapDragging(true));
  viewPort.onMouseLeave = () => store.dispatch(setMapDragging(false));

  return viewPort;
}
