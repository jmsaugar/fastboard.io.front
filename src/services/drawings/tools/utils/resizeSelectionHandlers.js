/**
 * @todo
 * @param {} selectedItem
 * @param {*} handlersItem
 */
export default function resizeSelectionHandlers(selectedItem, handlersItem) {
  handlersItem.children.topLeft.position.set(selectedItem.bounds.topLeft);
  handlersItem.children.topRight.position.set(selectedItem.bounds.topRight);
  handlersItem.children.bottomLeft.position.set(selectedItem.bounds.bottomLeft);
  handlersItem.children.bottomRight.position.set(selectedItem.bounds.bottomRight);
}
