import { drawingsLayers, mapLayers } from '#constants';

/**
 * onItem2Front handler for selection tool.
 *
 * Brings item to front.
 * If called by the local user, acts on the currently selected item.
 * If called by a remote user, acts on the specified item
 *
 * @param {String} itemName Name of the item to be brought to front.
 *
 * @returns {String|undefined} Name of the item brought to front in case of being triggered locally.
 */
export default function onItem2Front(itemName) {
  if (itemName) {
    // Action triggered by a remote user
    const drawingsProject = this.dependencies.projects.drawings;
    const mapProject = this.dependencies.projects.map;

    const drawingsItem = drawingsProject.layers[drawingsLayers.drawings].children[itemName];
    const mapItem = mapProject.layers[mapLayers.drawings].children[itemName];

    if (drawingsItem) {
      drawingsItem.bringToFront();
    }

    if (mapItem) {
      mapItem.bringToFront();
    }

    return undefined;
  }

  // Action triggered by the local user
  if (!this.selectedItem.drawings || !this.selectedItem.map) {
    return undefined;
  }

  this.selectedItem.drawings.bringToFront();
  this.selectedItem.map.bringToFront();

  return this.selectedItem.drawings.name;
}
