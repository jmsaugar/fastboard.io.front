import { Group, Shape } from 'paper';

import { Log } from '#utils';
import { cursorTypes, selectionColorCode } from '#constants';
import store, { setSelectorCursorHover } from '#store';

import { bounds } from '../selector/constants';

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
 * @returns {Object} Item - group with 4 handler items - from the selection handler layer.
 */
export default function createSelectionHandlers(selectedItem, selectionLayer) {
  Log.debug('Service : Drawings : Tools : Utils : createSelectionHandlers', { selectedItem });

  // Set selected item to show its selection state
  selectedItem.set({
    selected      : true,
    selectedColor : selectionColorCode,
    onMouseEnter  : () => store.dispatch(setSelectorCursorHover(cursorTypes.dragging)),
    onMouseLeave  : () => store.dispatch(setSelectorCursorHover()),
  });

  // Create bound handlers on the selection layer
  boundsArray.forEach((bound) => {
    selectionLayer.addChild(new Shape.Circle({
      name         : bound,
      center       : selectedItem.internalBounds[bound],
      radius       : 6,
      fillColor    : selectionColorCode,
      onMouseEnter : () => store.dispatch(setSelectorCursorHover(bounds2cursorType[bound])),
      onMouseLeave : () => store.dispatch(setSelectorCursorHover()),
    }));
  });

  // Create a group with the handlers to manipulate all of them at once
  selectionLayer.addChild(
    new Group({
      name     : 'selectionHandlers', // @todo to constants
      children : boundsArray.map(
        (bound) => selectionLayer.children[bound],
      ),
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
