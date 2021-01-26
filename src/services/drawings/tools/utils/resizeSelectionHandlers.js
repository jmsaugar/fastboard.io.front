/**
 * Resize the selection handlers item to the same size of the selected item.
 *
 * @param {Object} selectedItem Selected item.
 * @param {Object} handlersItem Handles item to resize.
 */
export default function resizeSelectionHandlers(selectedItem, handlersItem) {
  if (!handlersItem) {
    return;
  }

  handlersItem.children.topLeft.position.set(selectedItem.bounds.topLeft);
  handlersItem.children.topRight.position.set(selectedItem.bounds.topRight);
  handlersItem.children.bottomLeft.position.set(selectedItem.bounds.bottomLeft);
  handlersItem.children.bottomRight.position.set(selectedItem.bounds.bottomRight);
}
