import { Point } from 'paper';

import { Log, point2net } from '#utils';
import { drawingsLayers } from '#constants';

import { createSelectionHandlers, removeSelectionHandlers } from '../utils';
import { bounds, operations } from './constants';
import { checkBoundsHit, checkContentHit } from './hitTesting';
import reset from './reset';

/**
 * onMouseDown handler for selection tool.
 *
 * Checks if there is hit on image or text item handlers or content.
 * If so, sets the proper config for next mouse drag operations.
 *
 * @param {Object} event Mouse down event object.
 */
export default function onMouseDown(event) {
  Log.debug('Service : Drawings : Tools : Selector : onMouseDown', { event });

  const point = event.point instanceof Point
    ? event.point
    : new Point(event.point);

  const boundsHit = checkBoundsHit.call(this, this.selectedItemHandlers, point);

  if (boundsHit) {
    // If clicked on the bounds of an item, rotation or resizing operation is set up
    switch (boundsHit) {
      // Top left handler is for rotation operation
      case bounds.topLeft:
        this.operation = operations.rotate;
        this.currentRotationAngle = 0;
        break;

      // All other handlers are for resizing operation
      case bounds.topRight:
        this.operation = operations.resize;
        this.resizeOriginBound = bounds.topRight;
        break;

      case bounds.bottomLeft:
        this.operation = operations.resize;
        this.resizeOriginBound = bounds.bottomLeft;
        break;

      case bounds.bottomRight:
        this.operation = operations.resize;
        this.resizeOriginBound = bounds.bottomRight;
        break;

      default:
        break;
    }

    return { point : point2net(point) };
  }

  // If clicked on the content of an item, translation operation is set up
  const item = checkContentHit.call(this, this.dependencies.project, point);

  if (!item) {
    reset.call(this);
    return undefined;
  }

  // If no bounds hit, default operation is translation
  this.operation = operations.translate;
  this.currentTranslationPoint = point;

  if (this.selectedItem !== item) {
    // Deselect previous item
    if (this.selectedItem) {
      // @todo deselect also when tool is unselected
      removeSelectionHandlers(
        this.selectedItem,
        this.dependencies.project.layers[drawingsLayers.selection],
      );
      this.selectedItemHandlers = undefined;
    }

    // Select new one
    this.selectedItem = item;
    this.selectedItemHandlers = createSelectionHandlers(
      this.selectedItem,
      this.dependencies.project.layers[drawingsLayers.selection],
    );
  }

  return { point : point2net(point) };
}
