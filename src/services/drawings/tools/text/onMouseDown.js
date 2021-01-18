import { v4 as uuidv4 } from 'uuid';
import { PointText } from 'paper';

import { Log } from '#utils';
import { drawingsLayers, mapLayers, canvasIds } from '#constants';

import { createSelectionHandlers, removeSelectionHandlers } from '../utils';

export default function onMouseDown(event) {
  Log.debug('Service : Drawings : Tools : Text : onMouseDown', { event });

  // @todo get canvas drawings id from dependencies?
  // Check that the event is triggered on the drawings canvas
  const element = event?.event?.path[0];
  if (element && element.id !== canvasIds.drawings) {
    return undefined;
  }

  // If the user was writing, leave the writing state
  if (this.isWriting) {
    removeSelectionHandlers(
      this.currentText.drawings,
      this.dependencies.projects.drawings.layers[drawingsLayers.selection],
    );

    this.isWriting = false;
    this.currentText = {
      drawings : undefined,
      map      : undefined,
    };

    return undefined;
  }

  // If the user was not writing, create a new text item
  const point = {
    x : event.point.x,
    y : event.point.y,
  };

  const itemName = event.itemName || uuidv4();

  this.isWriting = true;
  this.currentText.drawings = new PointText({
    point,
    name      : itemName,
    fillColor : this.strokeColor,
    fontSize  : 18, // @todo to constants
    parent    : this.dependencies.projects.drawings.layers[drawingsLayers.drawings],
  });

  createSelectionHandlers(
    this.currentText.drawings,
    this.dependencies.projects.drawings.layers[drawingsLayers.selection],
  );

  // Replicate the text item in the map project
  this.currentText.map = new PointText({
    point,
    name          : itemName,
    fillColor     : this.strokeColor,
    fontSize      : 18, // @todo to constants
    strokeScaling : false,
    locked        : true,
    parent        : this.dependencies.projects.map.layers[mapLayers.drawings],
  });

  return { point, itemName };
}
