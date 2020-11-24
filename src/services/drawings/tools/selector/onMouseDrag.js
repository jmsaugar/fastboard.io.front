import { Point } from 'paper';

import { point2net } from '#utils';

import { bounds, operations } from './constants';

/**
 * onMouseDrag handler for selection tool.
 *
 * Handles the given operation on the selected item.
 *
 * @param {Object} event Mouse down event object.
 */
export default function onMouseDrag(event) {
  const point = event.point instanceof Point
    ? event.point
    : new Point(event.point);

  let delta;
  let resizeOrigin;

  let p1;
  let p2;
  let newRotationAngle;

  if (this.selectedItem) {
    switch (this.operation) {
      case operations.translate:
        this.selectedItem.translate(point.subtract(this.currentPoint));
        this.currentPoint = point;
        break;

      case operations.resize:
        switch (this.dragPoint) {
          case bounds.bottomRight:
            delta = point.subtract(this.selectedItem.bounds.bottomRight);
            resizeOrigin = this.selectedItem.bounds.topLeft;
            break;

          case bounds.bottomLeft:
            delta = new Point(
              this.selectedItem.bounds.bottomLeft.x - point.x,
              point.y - this.selectedItem.bounds.bottomLeft.y,
            );
            resizeOrigin = this.selectedItem.bounds.topRight;
            break;

          case bounds.topRight:
            delta = new Point(
              point.x - this.selectedItem.bounds.topRight.x,
              this.selectedItem.bounds.topRight.y - point.y,
            );
            resizeOrigin = this.selectedItem.bounds.bottomLeft;
            break;

          default:
            break;
        }

        this.selectedItem.scale(
          new Point(
            (this.selectedItem.bounds.width + delta.x) / this.selectedItem.bounds.width,
            (this.selectedItem.bounds.height + delta.y) / this.selectedItem.bounds.height,
          ),
          resizeOrigin,
        );
        break;

      case operations.rotate:
        p1 = this.selectedItem.bounds.topLeft.subtract(this.selectedItem.bounds.center);
        p2 = point.subtract(this.selectedItem.bounds.center);

        this.selectedItem.rotate(-1 * this.previousRotation, this.selectedItem.bounds.center);
        newRotationAngle = p1.getDirectedAngle(p2);

        this.selectedItem.rotate(newRotationAngle, this.selectedItem.bounds.center);
        this.previousRotation = newRotationAngle;
        break;

      default:
        break;
    }

    return { point : point2net(point) };
  }

  return undefined;
}
