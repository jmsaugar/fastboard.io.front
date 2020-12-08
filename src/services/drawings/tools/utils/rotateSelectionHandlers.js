import { Log } from '#utils';

/**
 * @todo
 * @param {} selectedItem
 * @param {*} handlersItem
 */
export default function rotateSelectionHandlers(handlersItem, angle) {
  Log.debug('Services : Drawings : Tools : Utils : rotateSelectionHandlers');

  handlersItem.rotate(angle);
}
