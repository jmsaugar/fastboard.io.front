/**
 * Rotate the selection handlers item to the same angle of the selected item.
 *
 * @param {Object} selectedItem Object with selected item and handlers.
 * @param Number angle Angle to rotate the handlers item.
 */
export default function rotate({ handlers }, angle) {
  if (!handlers) {
    return;
  }

  // Rotate the handlers item to match the selected drawings item
  handlers.rotate(angle);
}
