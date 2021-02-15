/**
 * Update a text item given the pressed key parameters.
 *
 * @param {Object} item Text item to be updated.
 * @param {String} content New content of the item.
 */
export default function update(item, content) {
  if (!item) {
    return;
  }

  item.set({ content });
}
