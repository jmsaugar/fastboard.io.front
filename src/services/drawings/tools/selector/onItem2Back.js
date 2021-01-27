import { drawingsLayers, mapLayers } from '#constants';

/**
 * onItem2Back handler for selection tool.
 *
 * Pushes item to back.
 * If called by the local user, acts on the currently selected item.
 * If called by a remote user, acts on the specified item
 *
 * @param {String} itemName Name of the item to be pushed to back.
 *
 * @returns {String|undefined} Name of the item pushed back in case of being triggered locally.
 */
export default function onItem2Back(itemName) {
  if (itemName) {
    // Action triggered by a remote user
    const drawingsProject = this.dependencies.projects.drawings;
    const mapProject = this.dependencies.projects.map;

    const drawingsItem = drawingsProject.layers[drawingsLayers.drawings].children[itemName];
    const mapItem = mapProject.layers[mapLayers.drawings].children[itemName];

    if (drawingsItem) {
      drawingsItem.sendToBack();
    }

    if (mapItem) {
      mapItem.sendToBack();
    }

    return undefined;
  }

  // Action triggered by the local user
  if (!this.selectedItem.drawings || !this.selectedItem.map) {
    return undefined;
  }

  this.selectedItem.drawings.sendToBack();
  this.selectedItem.map.sendToBack();

  return this.selectedItem.drawings.name;
}
