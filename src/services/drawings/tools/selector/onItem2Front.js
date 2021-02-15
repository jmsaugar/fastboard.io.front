import { Log } from '#utils';
import { drawingsLayers, mapLayers } from '#constants';

/**
 * onItem2Front handler for selection tool.
 *
 * Brings the given item to the front.
 *
 * @param {String} itemName Name of the item to be brought to front.
 */
export default function onItem2Front(itemName) {
  Log.debug('Service : Drawings : Tools : Selector : onItem2Front', { itemName });

  if (!itemName) {
    return;
  }

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
}
