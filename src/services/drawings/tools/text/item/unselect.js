/**
 * Set given text item as unselected.
 *
 * @param {Object} item Item to be set as unselected.
 */
export default function unselect(item) {
  item.set({
    selected : false,
    locked   : false,
  });
}
