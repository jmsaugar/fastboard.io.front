import { PointText } from 'paper';

import { Log } from '#utils';

export default function onMouseDown(event) {
  Log.debug('Services : Drawings : Tools : Text : onMouseDown', { event });

  if (this.isWriting) {
    this.isWriting = false;
    this.currentText.selected = false;
    this.currentText = undefined;

    return undefined;
  }

  const point = {
    x : event.point.x,
    y : event.point.y,
  };

  this.isWriting = true;
  this.currentText = new PointText(point);
  this.currentText.fillColor = this.strokeColor;
  this.currentText.fontSize = 18;
  this.currentText.selected = true;

  return { point };
}
