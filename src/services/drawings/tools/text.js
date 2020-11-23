import { PointText, Tool } from 'paper';

import { Log } from '#utils';
import { drawingsMessages, tools } from '#constants';

const keys = Object.freeze({
  backspace : 'backspace',
  escape    : 'escape',
  enter     : 'enter',
  dead      : 'dead',
});

function activate() {
  Log.debug('Services : Drawings : Tools : Text : activate');

  this.tool.activate();
}

function onMouseDown(event) {
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
  this.currentText.fillColor = 'black';
  this.currentText.fontSize = 18;
  this.currentText.selected = true;

  return { point };
}

function onKeyDown(event) {
  Log.debug('Services : Drawings : Tools : Text : onKeyDown', { event });

  // @todo check this for missing cases
  switch (event.key) {
    case keys.escape:
      this.isWriting = false;
      this.currentText.selected = false;
      this.currentText = undefined;
      break;

    case keys.backspace:
      this.currentText.content = this.currentText.content.slice(0, -1);
      break;

    case keys.dead:
    case keys.enter:
    default:
      this.currentText.content += event.character;
      break;
  }

  return { key : event.key, character : event.character };
}

export default (dependencies) => {
  Log.info('Services : Drawings : Tools : Text : create');

  const scope = {
    dependencies : {
      realtimeService : dependencies?.realtimeService,
    },
    tool        : new Tool(),
    currentText : undefined,
    isWriting   : false,
  };

  scope.tool.on('mousedown', (event) => {
    Log.debug('Text : onMouseDown', { event });

    dependencies.realtimeService.send(
      drawingsMessages.doMouseDown,
      {
        tool : tools.text,
        ...onMouseDown.call(scope, event),
      },
    ).catch(() => {}); // @todo;
  });

  scope.tool.on('keydown', (event) => {
    Log.debug('Text : onKeyDown', { event });

    event.preventDefault();

    dependencies.realtimeService.send(
      drawingsMessages.doKeyDown,
      {
        tool : tools.text,
        ...onKeyDown.call(scope, event),
      },
    ).catch(() => {}); // @todo;
  });

  return Object.freeze({
    activate    : activate.bind(scope),
    onMouseDown : onMouseDown.bind(scope),
    onKeyDown   : onKeyDown.bind(scope),
  });
};
