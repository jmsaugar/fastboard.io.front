
import { handlersBorderName } from '../../constants';
/**
 * Resize the selection handlers item to the same size of the selected item.
 *
 * @param {Object} selectedItem Object with selected item and handlers.
 */
export default function resize({ drawings, handlers }) {
  if (!drawings || !handlers) {
    return;
  }

  // Resize the handlers item to match the selected drawings item
  handlers.children.topLeft.position.set(drawings.bounds.topLeft);
  handlers.children.topRight.position.set(drawings.bounds.topRight);
  handlers.children.bottomLeft.position.set(drawings.bounds.bottomLeft);
  handlers.children.bottomRight.position.set(drawings.bounds.bottomRight);

  // Update the border path to match the selected drawings item
  handlers.children[handlersBorderName].segments[0].set({ point : drawings.bounds.topLeft });
  handlers.children[handlersBorderName].segments[1].set({ point : drawings.bounds.topRight });
  handlers.children[handlersBorderName].segments[2].set({ point : drawings.bounds.bottomRight });
  handlers.children[handlersBorderName].segments[3].set({ point : drawings.bounds.bottomLeft });
  handlers.children[handlersBorderName].segments[4].set({ point : drawings.bounds.topLeft });
}
