import { v4 as uuidv4 } from 'uuid';
import { PointText } from 'paper';

import { Log } from '#utils';
import { drawingsLayers } from '#constants';

import { createSelectionHandlers, removeSelectionHandlers } from '../utils';

export default function onMouseDown(event) {
  Log.debug('Service : Drawings : Tools : Text : onMouseDown', { event });

  // If the user was writing, leave the writing state
  if (this.isWriting) {
    removeSelectionHandlers(
      this.currentText,
      this.dependencies.project.layers[drawingsLayers.selection],
    );

    this.isWriting = false;
    this.currentText = undefined;

    return undefined;
  }

  // If the user was not writing, create a new text item
  const point = {
    x : event.point.x,
    y : event.point.y,
  };

  this.isWriting = true;
  this.currentText = new PointText({
    point,
    name      : event.itemName || uuidv4(),
    fillColor : this.strokeColor,
    fontSize  : 18, // @todo to constants
  });

  createSelectionHandlers(
    this.currentText,
    this.dependencies.project.layers[drawingsLayers.selection],
  );

  return { point, itemName : this.currentText.name };
}
