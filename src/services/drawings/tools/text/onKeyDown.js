import { Log } from '#utils';

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
