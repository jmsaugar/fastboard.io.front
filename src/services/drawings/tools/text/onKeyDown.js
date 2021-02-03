import { Log } from '#utils';
import { drawingsMessages } from '#constants';
import { drawingsService } from '#services';

import { updateItem, unselectItem } from './item';

/**
 * Key down event handler.
 *
 * @param {Object} event Key down event.
 *
 * @returns {Object|undefined} Object with operation data; undefined if no relevant operation.
 */
export default function onKeyDown(event) {
  Log.debug('Service : Drawings : Tools : Text : onKeyDown', { event });

  if (!this.currentText.drawings || !this.currentText.map) {
    return undefined;
  }

  // Update text items
  this.isWriting = updateItem(
    this.currentText.drawings,
    event.key,
    event.character,
  );
  this.currentText.map.set({ content : this.currentText.drawings.content });

  // If the user is writing, return operation data
  if (this.isWriting) {
    return {
      type      : drawingsMessages.doUpdateText,
      key       : event.key,
      character : event.character,
    };
  }

  // If the user is not writing anymore, finish writing operation and activate selector
  unselectItem(this.currentText.drawings);

  drawingsService.tools.selector.activate(this.currentText.drawings.name);

  this.currentText.drawings = undefined;
  this.currentText.map = undefined;

  return {
    type : drawingsMessages.doUnselectText,
  };
}
