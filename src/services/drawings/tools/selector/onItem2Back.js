import { drawingsLayers, mapLayers } from '#constants';

/**
 * onItem2Back handler for selection tool.
 *
 * Sends the given item to the back.
 *
 * @param {String} itemName Name of the item to be sent to back.
 */
export default function onItem2Back(itemName) {
  if (!itemName) {
    return;
  }

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
}
