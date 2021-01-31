import { Log } from '#utils';

/**
 * @param {Object} selectionLayer Layer that will contain the selection handlers.
 */
export default function remove(selectionLayer) {
  Log.debug('Service : Drawings : Tools : Selector : selectionHandlers : remove');

  selectionLayer.removeChildren();
}
