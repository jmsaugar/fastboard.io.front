import { updateItem } from './item';

/**
 * Update text handler.
 *
 * @param {Object} Params Text updating params { content }
 */
export default function onTextUpdated({ content }) {
  updateItem(this.currentText.drawings, content);
  updateItem(this.currentText.map, content);
}
