import { Point } from 'paper';

import { point2net } from '#utils';

import { operations } from './constants';
import { resize, rotate, translate } from './operations';

/**
 * onMouseDrag handler for selection tool.
 *
 * Handlers the given operation on the selected item.
 *
 * @param {Object} event Mouse down event object.
 */
export default function onMouseDrag(event) {
  const point = event.point instanceof Point
    ? event.point
    : new Point(event.point);

  if (this.selectedItem) {
    switch (this.operation) {
      case operations.translate:
        translate(
          this.currentTranslationPoint,
          point,
          this.selectedItem,
          this.selectedItemHandlers,
        );
        this.currentTranslationPoint = point;
        break;

      case operations.resize:
        resize(
          this.resizeOriginBound,
          point,
          this.selectedItem,
          this.selectedItemHandlers,
        );
        break;

      case operations.rotate:
        this.currentRotationAngle = rotate(
          this.currentRotationAngle,
          point,
          this.selectedItem,
          this.selectedItemHandlers,
        );
        break;

      default:
        break;
    }

    return { point : point2net(point) };
  }

  return undefined;
}
