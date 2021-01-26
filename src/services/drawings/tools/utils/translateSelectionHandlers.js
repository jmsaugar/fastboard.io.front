/**
 * Translate the selection handlers item to the same position of the selected item.
 *
 * @param {Object} selectedItem Selected item.
 * @param {Object} handlersItem Handles item to translate.
 */
export default function translateSelectionHandlers(selectedItem, handlersItem) {
  if (!handlersItem) {
    return;
  }

  handlersItem.set({ position : selectedItem.position });
}
