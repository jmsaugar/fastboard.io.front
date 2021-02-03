import { unselectItem } from './item';

/**
 * Unselect text handler
 */
export default function unselectText() {
  unselectItem(this.currentText.drawings);
}
