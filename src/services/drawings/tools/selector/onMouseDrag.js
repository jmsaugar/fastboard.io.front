import { Point } from 'paper';

import { bounds, operations } from './constants';

export default function onMouseDrag(event) {
  let delta;
  let resizeOrigin;

  let p1;
  let p2;
  let newRotationAngle;

  if (this.selectedItem) {
    switch (this.operation) {
      case operations.translate:
        this.selectedItem.translate(event.point.subtract(this.currentPoint));
        this.currentPoint = event.point;
        break;

      case operations.resize:
        switch (this.dragPoint) {
          case bounds.bottomRight:
            delta = event.point.subtract(this.selectedItem.bounds.bottomRight);
            resizeOrigin = this.selectedItem.bounds.topLeft;
            break;

          case bounds.bottomLeft:
            delta = new Point(
              this.selectedItem.bounds.bottomLeft.x - event.point.x,
              event.point.y - this.selectedItem.bounds.bottomLeft.y,
            );
            resizeOrigin = this.selectedItem.bounds.topRight;
            break;

          case bounds.topRight:
            delta = new Point(
              event.point.x - this.selectedItem.bounds.topRight.x,
              this.selectedItem.bounds.topRight.y - event.point.y,
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
        p2 = event.point.subtract(this.selectedItem.bounds.center);

        this.selectedItem.rotate(-1 * this.previousRotation, this.selectedItem.bounds.center);
        newRotationAngle = p1.getDirectedAngle(p2);

        this.selectedItem.rotate(newRotationAngle, this.selectedItem.bounds.center);
        this.previousRotation = newRotationAngle;
        break;

      default:
        break;
    }
  }
}
