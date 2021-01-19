import { Point } from 'paper';

import { resizeSelectionHandlers } from '../../utils';
import { bounds } from '../constants';

/**
 * Perform a resize operation. The resize has to be done on both the
 * item itself and the item that displays the manipulation handlers.
 *
 * @param {Object} resizeOriginBound Bound used as origin for dragging action.
 * @param {Object} targetPoint Current point dragged to by the user cursor.
 * @param {Object} selectedItem Actual items to be resized - in drawing canvas and map.
 * @param {Object} handlersItem Handlers item.
 */
export default function resize(resizeOriginBound, targetPoint, selectedItem, handlersItem) {
  let delta;
  let resizeOriginPoint;

  // Determine delta depending on the drag origin and the current point
  switch (resizeOriginBound) {
    case bounds.bottomRight:
      delta = targetPoint.subtract(selectedItem.drawings.bounds.bottomRight);
      resizeOriginPoint = selectedItem.drawings.bounds.topLeft;
      break;

    case bounds.bottomLeft:
      delta = new Point(
        selectedItem.drawings.bounds.bottomLeft.x - targetPoint.x,
        targetPoint.y - selectedItem.drawings.bounds.bottomLeft.y,
      );
      resizeOriginPoint = selectedItem.drawings.bounds.topRight;
      break;

    case bounds.topRight:
      delta = new Point(
        targetPoint.x - selectedItem.drawings.bounds.topRight.x,
        selectedItem.drawings.bounds.topRight.y - targetPoint.y,
      );
      resizeOriginPoint = selectedItem.drawings.bounds.bottomLeft;
      break;

    default:
      break;
  }

  // Calculate scaling factor based on the given delta
  const scalingFactor = {
    x : (selectedItem.drawings.bounds.width + delta.x) / selectedItem.drawings.bounds.width,
    y : (selectedItem.drawings.bounds.height + delta.y) / selectedItem.drawings.bounds.height,
  };

  // Scale the selected item in the drawings canvas
  selectedItem.drawings.scale(
    new Point(scalingFactor.x, scalingFactor.y),
    resizeOriginPoint,
  );

  // Scale the selected item in the map
  selectedItem.map.scale(
    new Point(scalingFactor.x, scalingFactor.y),
    resizeOriginPoint,
  );

  // Scale the handlers item to match the selected item
  resizeSelectionHandlers(selectedItem.drawings, handlersItem);
}
