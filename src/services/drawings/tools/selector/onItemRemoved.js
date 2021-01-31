import { drawingsLayers, mapLayers } from '#constants';

import reset from './reset';

/**
 * onItemRemoved handler for selection tool.
 *
 * Removes the given item.
 *
 * @param {String} itemName Name of the item to be removed.
 */
export default function onItemRemoved(itemName) {
  if (!itemName) {
    return;
  }

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

  reset.call(this);
}
