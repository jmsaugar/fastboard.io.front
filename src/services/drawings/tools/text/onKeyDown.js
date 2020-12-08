import { Log } from '#utils';

import { resizeSelectionHandlers, removeSelectionHandlers } from '../utils';

const keys = Object.freeze({
  backspace : 'backspace',
  escape    : 'escape',
  enter     : 'enter',
  dead      : 'dead',
});

export default function onKeyDown(event) {
  Log.debug('Services : Drawings : Tools : Text : onKeyDown', { event });

  // @todo check this for missing cases
  switch (event.key) {
    case keys.escape:
      this.isWriting = false;
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

  if (this.isWriting) {
    resizeSelectionHandlers(
      this.currentText,
      this.dependencies.project.layers.selection.children.selectionHandlers,
    );
  } else {
    removeSelectionHandlers(
      this.currentText,
      this.dependencies.project.layers.selection,
    );
    this.currentText = undefined;
  }

  return { key : event.key, character : event.character };
}
