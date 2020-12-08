import { Log } from '#utils';

/**
 * @todo
 * @param {} selectedItem
 * @param {*} handlersItem
 */
export default function resizeSelectionHandlers(selectedItem, handlersItem) {
  Log.debug('Services : Drawings : Tools : Utils : resizeSelectionHandlers');

  handlersItem.children.topLeft.position.set(selectedItem.bounds.topLeft);
  handlersItem.children.topRight.position.set(selectedItem.bounds.topRight);
  handlersItem.children.bottomLeft.position.set(selectedItem.bounds.bottomLeft);
  handlersItem.children.bottomRight.position.set(selectedItem.bounds.bottomRight);
}
