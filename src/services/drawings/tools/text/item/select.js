/**
 * Set given text item as selected.
 *
 * @param {Object} item Item to be set as selected.
 */
export default function select(item) {
  if (!item) {
    return;
  }

  item.set({
    selected : true,
    locked   : true,
  });
}
