import { Log } from '#utils';

import { bounds, operations } from './constants';
import checkBoundsHit from './checkBoundsHit';
import checkContentHit from './checkContentHit';
import reset from './reset';

export default function onMouseDown(event) {
  Log.debug('Services : Drawings : Tools : Selector : onMouseDown', { event });

  const boundsHit = checkBoundsHit.call(this, this.selectedItem, event.point);

  if (boundsHit) {
    switch (boundsHit) {
      case bounds.topLeft:
        this.operation = operations.rotate;
        this.previousRotation = 0;
        break;

      case bounds.topRight:
        this.operation = operations.resize;
        this.dragPoint = bounds.topRight;
        break;

      case bounds.bottomLeft:
        this.operation = operations.resize;
        this.dragPoint = bounds.bottomLeft;
        break;

      case bounds.bottomRight:
        this.operation = operations.resize;
        this.dragPoint = bounds.bottomRight;
        break;

      default:
        break;
    }
  } else {
    const item = checkContentHit.call(this, this.dependencies.project, event.point);

    if (!item) {
      reset.call(this);
      return;
    }

    this.operation = operations.translate;
    this.currentPoint = event.point;

    if (this.selectedItem !== item) {
      // Deselect previous item
      if (this.selectedItem) {
        this.selectedItem.selected = false;
      }

      // Select new one
      this.selectedItem = item;
      this.selectedItem.selected = true;
      this.selectedItem.selectedColor = '#ccc'; // @todo selection color from constants, and use it in text and image
    }
  }
}
