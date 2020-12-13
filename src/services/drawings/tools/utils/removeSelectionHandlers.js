import { Log } from '#utils';

/**
 * Remove selection handlers.
 *
 * @param {Object} selectedItem Item to be removed selection handlers from.
 * @param {Object} selectionLayer Layer that contains the selection handlers.
 */
export default function removeSelectionHandlers(selectedItem, selectionLayer) {
  Log.debug('Service : Drawings : Tools : Utils : removeSelectionHandlers');

  selectedItem.set({ selected : false });
  selectionLayer.removeChildren();
}
