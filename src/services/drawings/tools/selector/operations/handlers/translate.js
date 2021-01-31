/**
 * Translate the selection handlers item to the same position of the selected item.
 *
 * @param {Object} selectedItem Object with selected item and handlers.
 */
export default function translate({ drawings, handlers }) {
  if (!drawings || !handlers) {
    return;
  }

  // Translate the handlers item to match the selected drawings item
  handlers.set({ position : drawings.position });
}
