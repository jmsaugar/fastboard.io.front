import { v4 as uuidv4 } from 'uuid';

import { Log, point2net } from '#utils';
import {
  drawingsMessages, drawingsLayers, mapLayers, canvasIds,
} from '#constants';
import { drawingsService } from '#services';

import { createItem, selectItem, unselectItem } from './item';

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
  const element = event?.event?.path[0];
  if (element && element.id !== canvasIds.drawings) {
    return undefined;
  }

  // If the user was writing, leave the writing state and select the item
  if (this.isWriting) {
    drawingsService.tools.selector.activate(this.currentText.drawings.name);
    unselectItem(this.currentText.drawings);

    this.isWriting = false;
    this.currentText = {
      drawings : undefined,
      map      : undefined,
    };

    return { type : drawingsMessages.doUnselectText };
  }

  // If the user was not writing, create a new text item
  const itemName = uuidv4();

  this.isWriting = true;
  this.currentText.drawings = createItem(
    event.point,
    this.strokeColor,
    itemName,
    this.dependencies.projects.drawings.layers[drawingsLayers.drawings],
  );

  // Replicate the text item in the map project
  this.currentText.map = createItem(
    event.point,
    this.strokeColor,
    itemName,
    this.dependencies.projects.map.layers[mapLayers.drawings],
  );

  // Set item as selected
  selectItem(this.currentText.drawings);

  return {
    type  : drawingsMessages.doCreateText,
    point : point2net(event.point),
    color : this.strokeColor,
    itemName,
  };
}
