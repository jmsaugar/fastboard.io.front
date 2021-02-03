import { updateItem } from './item';

/**
 * Update text handler.
 *
 * @param {Object} Params Text updating params { key, character }
 */
export default function onTextUpdated({ key, character }) {
  updateItem(this.currentText.drawings, key, character);
  updateItem(this.currentText.map, key, character);
}
