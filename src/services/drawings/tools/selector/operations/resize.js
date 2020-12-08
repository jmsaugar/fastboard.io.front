import { Point } from 'paper';

import { resizeSelectionHandlers } from '../../utils';
import { bounds } from '../constants';

/**
 * Perform a resize operation. The resize has to be done on both the
 * item itself and the item that displays the manipulation handlers.
 *
 * @param {Object} resizeOriginBound Bound used as origin for dragging action.
 * @param {Object} targetPoint Current point dragged to by the user cursor.
 * @param {Object} selectedItem Actual item to be resized.
 * @param {Object} handlersItem Handlers item.
 */
export default function resize(resizeOriginBound, targetPoint, selectedItem, handlersItem) {
  let delta;
  let resizeOriginPoint;

  // Determine delta depending on the drag origin and the current point
  switch (resizeOriginBound) {
    case bounds.bottomRight:
      delta = targetPoint.subtract(selectedItem.bounds.bottomRight);
      resizeOriginPoint = selectedItem.bounds.topLeft;
      break;

    case bounds.bottomLeft:
      delta = new Point(
        selectedItem.bounds.bottomLeft.x - targetPoint.x,
        targetPoint.y - selectedItem.bounds.bottomLeft.y,
      );
      resizeOriginPoint = selectedItem.bounds.topRight;
      break;

    case bounds.topRight:
      delta = new Point(
        targetPoint.x - selectedItem.bounds.topRight.x,
        selectedItem.bounds.topRight.y - targetPoint.y,
      );
      resizeOriginPoint = selectedItem.bounds.bottomLeft;
      break;

    default:
      break;
  }

  // Scale the selected item based on the given delta
  selectedItem.scale(
    new Point(
      (selectedItem.bounds.width + delta.x) / selectedItem.bounds.width,
      (selectedItem.bounds.height + delta.y) / selectedItem.bounds.height,
    ),
    resizeOriginPoint,
  );

  // Scale the handlers item to match the selected item
  resizeSelectionHandlers(selectedItem, handlersItem);
}
