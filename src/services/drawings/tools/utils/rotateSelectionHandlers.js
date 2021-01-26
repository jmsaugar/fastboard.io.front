/**
 * Rotate the selection handlers item to the same angle of the selected item.
 *
 * @param {Object} selectedItem Selected item.
 * @param {Object} handlersItem Handles item to rotate.
 */
export default function rotateSelectionHandlers(handlersItem, angle) {
  if (!handlersItem) {
    return;
  }

  handlersItem.rotate(angle);
}
