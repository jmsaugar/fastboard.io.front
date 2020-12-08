import { PointText } from 'paper';

import { Log } from '#utils';

import { createSelectionHandlers, removeSelectionHandlers } from '../utils';

export default function onMouseDown(event) {
  Log.debug('Services : Drawings : Tools : Text : onMouseDown', { event });

  // If the user was writing, leave the writing state
  if (this.isWriting) {
    removeSelectionHandlers(
      this.currentText,
      this.dependencies.project.layers.selection,
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
  this.currentText = new PointText(point);
  this.currentText.fillColor = this.strokeColor;
  this.currentText.fontSize = 18;

  createSelectionHandlers(
    this.currentText,
    this.dependencies.project.layers.selection,
  );

  return { point };
}
