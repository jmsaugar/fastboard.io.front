import { Group, Path, Shape } from 'paper';

import { Log } from '#utils';
import { cursorTypes, selectionColorCode } from '#constants';
import store, { setSelectorCursorHover } from '#store';

import { bounds, handlersBorderName } from '../constants';

const borderPathWidth = 3;
const boundsArray = Object.values(bounds);
const bounds2cursorType = Object.freeze({
  [bounds.topLeft]     : cursorTypes.rotating,
  [bounds.topRight]    : cursorTypes.menu,
  [bounds.bottomLeft]  : cursorTypes.resizingSW,
  [bounds.bottomRight] : cursorTypes.resizingSE,
});

/**
 * Add selection handlers to the selected item.
 *
 * @param {Object} selectedItem Item to be added selection handlers to.
 * @param {Object} selectionLayer Layer that will contain the selection handlers.
 *
 * @returns {Object} Item - group with the handler items - from the selection handler layer.
 */
export default function create(selectedItem, selectionLayer) {
  Log.debug('Service : Drawings : Tools : Selector : selectionHandlers : create', { selectedItem });

  // Set selected item cursor changes
  selectedItem.set({
    onMouseEnter : () => store.dispatch(setSelectorCursorHover(cursorTypes.dragging)),
    onMouseLeave : () => store.dispatch(setSelectorCursorHover()),
  });

  // Create border on the selected item
  const borderPath = new Path({
    name        : handlersBorderName,
    strokeColor : selectionColorCode,
    strokeWidth : borderPathWidth,
    parent      : selectionLayer,
    segments    : [
      selectedItem.internalBounds[bounds.topLeft],
      selectedItem.internalBounds[bounds.topRight],
      selectedItem.internalBounds[bounds.bottomRight],
      selectedItem.internalBounds[bounds.bottomLeft],
      selectedItem.internalBounds[bounds.topLeft],
    ],
  });

  // Create bound handlers on the selection layer
  const boundsItems = boundsArray.map((bound) => new Shape.Circle({
    name         : bound,
    center       : selectedItem.internalBounds[bound],
    radius       : 8,
    fillColor    : selectionColorCode,
    onMouseEnter : () => store.dispatch(setSelectorCursorHover(bounds2cursorType[bound])),
    onMouseLeave : () => store.dispatch(setSelectorCursorHover()),
  }));

  // Create a group with the handlers to manipulate all of them at once
  selectionLayer.addChild(
    new Group({
      name     : 'selectionHandlers', // @todo to constants
      children : [borderPath, ...boundsItems],
    }),
  );

  // Reproduce the selected item transformations on the handler items group
  selectionLayer.children.selectionHandlers.transform(selectedItem.matrix);

  // Except the scaling of the handler items themselves, which retain the original size
  selectionLayer.children.selectionHandlers.children.forEach((handlerItem) => {
    handlerItem.set({ scaling : 1 });
  });

  return selectionLayer.children.selectionHandlers;
}
