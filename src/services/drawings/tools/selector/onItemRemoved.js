import { drawingsLayers, mapLayers } from '#constants';

import reset from './reset';

/**
 * onItemRemoved handler for selection tool.
 *
 * Removes item.
 * If called by the local user, acts on the currently selected item.
 * If called by a remote user, acts on the specified item
 *
 * @param {String} itemName Name of the item to be removed.
 *
 * @returns {String|undefined} Name of the item removed in case of being triggered locally.
 */
export default function onItemRemoved(itemName) {
  if (itemName) {
    // Action triggered by a remote user
    const drawingsProject = this.dependencies.projects.drawings;
    const mapProject = this.dependencies.projects.map;

    const drawingsItem = drawingsProject.layers[drawingsLayers.drawings].children[itemName];
    const mapItem = mapProject.layers[mapLayers.drawings].children[itemName];

    if (drawingsItem) {
      drawingsItem.remove();
    }

    if (mapItem) {
      mapItem.remove();
    }

    return undefined;
  }

  // Action triggered by the local user
  if (!this.selectedItem.drawings || !this.selectedItem.map) {
    return undefined;
  }

  const selectedItemName = this.selectedItem.drawings.name;

  this.selectedItem.drawings.remove();
  this.selectedItem.map.remove();

  reset.call(this);

  return selectedItemName;
}
