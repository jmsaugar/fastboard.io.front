const keys = Object.freeze({
  backspace : 'backspace',
  escape    : 'escape',
  enter     : 'enter',
  dead      : 'dead',
});

/**
 * Update a text item given the pressed key parameters.
 *
 * @param {Object} item Text item to be updated.
 * @param {String} key Pressed key code.
 * @param {String} character Pressed key character.
 *
 * @returns {Boolean} True if the item is being written; false otherwise.
 */
export default function update(item, key, character) {
  // @todo check this for missing cases
  switch (key) {
    case keys.escape:
      return false;

    case keys.backspace:
      item.set({ content : item.content.slice(0, -1) });
      return true;

    case keys.dead:
    case keys.enter:
    default:
      item.set({ content : item.content + character });
      return true;
  }
}
