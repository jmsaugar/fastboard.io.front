import { v4 as uuidv4 } from 'uuid';

import { Log, point2net } from '#utils';
import {
  drawingsMessages, drawingsLayers, mapLayers, canvasIds,
} from '#constants';
import store, { showTextAreaItem } from '#store';
import { drawingsService } from '#services';

import { createItem } from './item';
import reset from './reset';

import { getTouchPosition } from '../selector/hitTesting';

/**
 * Mouse down event handler.
 *
 * @param {Object} event Mouse down event.
 *
 * @returns {Object|undefined} Object with operation data; undefined if no relevant operation.
 */
export default function onMouseDown(event) {
  Log.debug('Service : Drawings : Tools : Text : onMouseDown', { event });

  // @todo if unselected empty text item, remove it

  // @todo get canvas drawings id from dependencies?
  // Check that the event is triggered on the drawings canvas
  const element = event?.event?.path?.[0];
  if (element && element.id !== canvasIds.drawings) {
    return undefined;
  }

  // If the user was writing, leave the writing state and select the item
  if (this.isWriting) {
    const { itemName } = this.currentText;

    // Reset the tool, as the user has stopped writing
    reset.call(this);

    // Activate selection tool on created text item
    drawingsService.tools.selector.activate(itemName);

    // Return information to be sent to other users
    return { type : drawingsMessages.doUnselectText };
  }

  // If the user was not writing, create a new text item
  this.isWriting = true;
  this.currentText.itemName = uuidv4();
  this.currentText.drawings = createItem(
    event.point,
    this.strokeColor,
    this.currentText.itemName,
    this.dependencies.projects.drawings.layers[drawingsLayers.drawings],
    false, // visible
  );
  this.currentText.map = createItem(
    event.point,
    this.strokeColor,
    this.currentText.itemName,
    this.dependencies.projects.map.layers[mapLayers.drawings],
  );

  // Show the TextAreaItem component to edit the text
  store.dispatch(showTextAreaItem({
    ...getTouchPosition(event),
    color : this.strokeColor,
  }));

  // Return data of the operation
  return {
    type     : drawingsMessages.doCreateText,
    point    : point2net(event.point),
    color    : this.strokeColor,
    itemName : this.currentText.itemName,
  };
}
