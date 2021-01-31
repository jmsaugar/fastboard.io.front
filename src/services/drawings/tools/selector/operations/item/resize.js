import { Point } from 'paper';

import { bounds } from '../../constants';

/**
 * Perform a translation operation. The translation has to be done on both the
 * item itself and the item that displays the manipulation handlers.
 *
 * @param {Object} selectedItem Object with selected item in drawings and map canvases.
 * @param {Object} originBound Bound used as origin for dragging action.
 * @param {Object} destinationPoint Current point dragged to by the user cursor.
 */
export default function traresizenslate({ drawings, map }, originBound, destinationPoint) {
  if (!drawings || !map) {
    return;
  }

  let delta;
  let originPoint;

  // Determine delta depending on the drag origin and the current point
  switch (originBound) {
    case bounds.bottomRight:
      delta = destinationPoint.subtract(drawings.bounds.bottomRight);
      originPoint = drawings.bounds.topLeft;
      break;

    case bounds.bottomLeft:
      delta = new Point(
        drawings.bounds.bottomLeft.x - destinationPoint.x,
        destinationPoint.y - drawings.bounds.bottomLeft.y,
      );
      originPoint = drawings.bounds.topRight;
      break;

    case bounds.topRight:
      delta = new Point(
        destinationPoint.x - drawings.bounds.topRight.x,
        drawings.bounds.topRight.y - destinationPoint.y,
      );
      originPoint = drawings.bounds.bottomLeft;
      break;

    default:
      break;
  }

  // Calculate scaling factor based on the given delta
  const scalingFactor = {
    x : (drawings.bounds.width + delta.x) / drawings.bounds.width,
    y : (drawings.bounds.height + delta.y) / drawings.bounds.height,
  };

  // Scale the selected item in the drawings canvas
  drawings.scale(
    new Point(scalingFactor.x, scalingFactor.y),
    originPoint,
  );

  // Scale the selected item in the map
  map.scale(
    new Point(scalingFactor.x, scalingFactor.y),
    originPoint,
  );
}
