import { point2net } from '#utils';
import { canvasIds } from '#constants';

import { operations } from './constants';
import {
  resizeItem,
  rotateItem,
  translateItem,
  resizeHandlers,
  rotateHandlers,
  translateHandlers,
} from './operations';

/**
 * onMouseDrag handler for selection tool.
 *
 * Checks if there is hit on image or text item handlers or content.
 * If so, sets the proper config for next mouse drag operations.
 *
 * @param {Object} event Mouse drag event object.
 *
 * @returns {Object|undefined} Operation data to be sent or undefined if not applicable.
 */
export default function onMouseDrag(event) {
  // Check that the event is triggered on the drawings canvas
  const element = event?.event?.path?.[0];
  if (element && element.id !== canvasIds.drawings) {
    return undefined;
  }

  // Check that there is a selected item and a current operation
  if (!this.selectedItem.drawings || !this.operation.type) {
    return undefined;
  }

  let newAngle;
  let operationData;
  switch (this.operation.type) {
    case operations.translate:
      translateItem(this.selectedItem, this.operation.originPoint, event.point);
      translateHandlers(this.selectedItem);

      // Prepare operation data to be sent to other users
      operationData = {
        type             : operations.translate,
        itemName         : this.selectedItem.drawings.name,
        originPoint      : point2net(this.operation.originPoint),
        destinationPoint : point2net(event.point),
      };

      // Update local operation status
      this.operation.originPoint = event.point;
      break;

    case operations.resize:
      resizeItem(this.selectedItem, this.operation.originBound, event.point);
      resizeHandlers(this.selectedItem);

      // Prepare operation data to be sent to other users
      operationData = {
        type             : operations.resize,
        itemName         : this.selectedItem.drawings.name,
        originBound      : this.operation.originBound,
        destinationPoint : point2net(event.point),
      };
      break;

    case operations.rotate:
      newAngle = rotateItem(this.selectedItem, this.operation.currentAngle, event.point);
      rotateHandlers(this.selectedItem, newAngle - this.operation.currentAngle);

      // Prepare operation data to be sent to other users
      operationData = {
        type             : operations.rotate,
        itemName         : this.selectedItem.drawings.name,
        currentAngle     : this.operation.currentAngle,
        destinationPoint : point2net(event.point),
      };

      // Update local operation status
      this.operation.currentAngle = newAngle;
      break;

    default:
      operationData = undefined;
      break;
  }

  return operationData;
}
