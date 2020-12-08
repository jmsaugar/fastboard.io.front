import { Log } from '#utils';

/**
 * @todo
 * @param {} selectedItem
 * @param {*} handlersItem
 */
export default function translateSelectionHandlers(selectedItem, handlersItem) {
  Log.debug('Services : Drawings : Tools : Utils : translateSelectionHandlers');

  handlersItem.set({ position : selectedItem.position });
}
