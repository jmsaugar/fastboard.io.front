import { Log } from '#utils';
import {
  canvasIds, cursorTypes, drawingsLayers, mapLayers,
} from '#constants';
import store, {
  setSelectorCursorOperation, showItemMenu, hideItemMenu,
} from '#store';

import { bounds, operations } from './constants';
import { checkBoundsHit, checkContentHit } from './hitTesting';
import reset from './reset';
import { createSelectionHandlers, removeSelectionHandlers } from './selectionHandlers';

/**
 * onMouseDown handler for selection tool.
 *
 * Checks if there is hit on image or text item handlers or content.
 * If so, sets the proper config for next mouse drag operations.
 *
 * @param {Object} event Mouse down event object.
 *
 * @returns {String|undefined} Item name in case an item was selected; undefined in other case.
 */
export default function onMouseDown(event) {
  Log.debug('Service : Drawings : Tools : Selector : onMouseDown', { event });

  // Check that the event is triggered on the drawings canvas
  const element = event?.event?.path[0];
  if (element && element.id !== canvasIds.drawings) {
    return undefined;
  }

  // New operation, so the item menu is hidden
  store.dispatch(hideItemMenu());

  const boundHit = checkBoundsHit.call(this, this.selectedItem.handlers, event.point);

  if (boundHit) {
    // If clicked on the bounds of an item, rotation or resizing operation is set up
    switch (boundHit) {
      // Top left handler is for rotation operation
      case bounds.topLeft:
        this.operation = {
          type         : operations.rotate,
          currentAngle : 0,
        };
        store.dispatch(setSelectorCursorOperation(cursorTypes.rotating));
        break;

      // Top right handler is for item menu operation
      case bounds.topRight:
        store.dispatch(showItemMenu({
          top  : event.event.layerY,
          left : event.event.layerX,
        }));
        break;

      // Both bottom handlers are for resizing operation
      case bounds.bottomLeft:
        this.operation = {
          type        : operations.resize,
          originBound : bounds.bottomLeft,
        };
        store.dispatch(setSelectorCursorOperation(cursorTypes.resizingSW));
        break;

      case bounds.bottomRight:
        this.operation = {
          type        : operations.resize,
          originBound : bounds.bottomRight,
        };
        store.dispatch(setSelectorCursorOperation(cursorTypes.resizingSE));
        break;

      default:
        break;
    }

    return undefined;
  }

  // If clicked on the content of an item, translation operation is set up
  const item = checkContentHit.call(this, this.dependencies.projects.drawings, event.point);

  // If no item selected, just reset the tool
  if (!item) {
    reset.call(this);
    return undefined;
  }

  // If item content hit, operation is translation
  this.operation = {
    type        : operations.translate,
    originPoint : event.point,
  };

  // Set translation cursor
  store.dispatch(setSelectorCursorOperation(cursorTypes.dragging));

  // If reselecting same item that was selected, do nothing
  if (this.selectedItem.drawings === item) {
    return undefined;
  }

  // If there was a different item selected, unselect it
  if (this.selectedItem.drawings) {
    removeSelectionHandlers(
      this.dependencies.projects.drawings.layers[drawingsLayers.selection],
    );
  }

  // Save new selected item
  this.selectedItem = {
    drawings : item,
    map      : this.dependencies.projects.map.layers[mapLayers.drawings].children[item.name],
  };

  // Create selection handlers for the selected item
  this.selectedItem.handlers = createSelectionHandlers(
    this.selectedItem.drawings,
    this.dependencies.projects.drawings.layers[drawingsLayers.selection],
  );

  return item.name;
}
