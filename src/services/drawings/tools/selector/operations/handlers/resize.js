import { Point } from 'paper';

/**
 * Resize the selection handlers item to the same size of the selected item.
 *
 * @param {Object} selectedItem Object with selected item and handlers.
 */
export default function resize({ drawings, handlers }, resizeData) {
  if (!drawings || !handlers) {
    return;
  }

  // Resize the handlers item to match the selected drawings item
  handlers.scale(new Point(resizeData.scalingFactor), resizeData.originPoint);

  // Keep the original size of the 4 handlers
  handlers.children.topLeft.set({ scaling : 1 });
  handlers.children.topRight.set({ scaling : 1 });
  handlers.children.bottomLeft.set({ scaling : 1 });
  handlers.children.bottomRight.set({ scaling : 1 });
}
