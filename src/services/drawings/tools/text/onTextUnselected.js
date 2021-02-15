import { unselectItem } from './item';

/**
 * Unselect text handler
 */
export default function onTextUnselected() {
  unselectItem(this.currentText.drawings);
}
