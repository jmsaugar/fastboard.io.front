/**
 * Set given text item as unselected.
 *
 * @param {Object} item Item to be set as unselected.
 */
export default function unselect(item) {
  if (!item) {
    return;
  }

  item.set({
    selected : false,
    locked   : false,
    visible  : true,
  });
}
