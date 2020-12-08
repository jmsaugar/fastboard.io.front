import { translateSelectionHandlers } from '../../utils';

/**
 * Perform a translation operation. The translation has to be done on both the
 * item itself and the item that displays the manipulation handlers.
 *
 * @param {Object} originPoint Point used as origin for dragging action.
 * @param {Object} targetPoint Current point dragged to by the user cursor.
 * @param {Object} selectedItem Actual item to be translated.
 * @param {Object} handlersItem Handlers item.
 */
export default function translate(originPoint, targetPoint, selectedItem, handlersItem) {
  // Translate the selected item
  selectedItem.translate(targetPoint.subtract(originPoint));

  // Translate the handlers item to match the selected item
  translateSelectionHandlers(selectedItem, handlersItem);
}
