import { Log } from '#utils';
// import { drawingsLayers } from '#constants';

// import { removeSelectionHandlers } from '../utils';

const keys = Object.freeze({
  backspace : 'backspace',
  escape    : 'escape',
  enter     : 'enter',
  dead      : 'dead',
});

// @todo refactor pending - related to selection
export default function onKeyDown(event) {
  Log.debug('Service : Drawings : Tools : Text : onKeyDown', { event });

  if (!this.currentText.drawings || !this.currentText.map) {
    return undefined;
  }

  // const drawingsProject = this.dependencies.projects.drawings;

  // @todo check this for missing cases
  switch (event.key) {
    case keys.escape:
      this.isWriting = false;
      break;

    case keys.backspace:
      this.currentText.drawings.content = this.currentText.drawings.content.slice(0, -1);
      this.currentText.map.content = this.currentText.map.content.slice(0, -1);
      break;

    case keys.dead:
    case keys.enter:
    default:
      this.currentText.drawings.content += event.character;
      this.currentText.map.content += event.character;
      break;
  }

  if (this.isWriting) {
    // resizeSelectionHandlers(
    //   this.currentText.drawings,
    //   drawingsProject.layers[drawingsLayers.selection].children.selectionHandlers,
    // );
  } else {
    // removeSelectionHandlers(
    //   this.currentText.drawings,
    //   drawingsProject.layers[drawingsLayers.selection],
    // );
    this.currentText.drawings = undefined;
    this.currentText.map = undefined;
  }

  return { key : event.key, character : event.character };
}
