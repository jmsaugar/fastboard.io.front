import { Log } from '#utils';
import { drawingsLayers, mapLayers } from '#constants';

import { createSelectionHandlers, removeSelectionHandlers } from '../utils';

/**
 * Activate selector tool.
 */
export default function activate(itemName) {
  Log.debug('Service : Drawings : Tools : Selector : activate');

  const { drawings : drawingsProject, map : mapProject } = this.dependencies.projects;

  this.tool.activate();

  if (this.selectedItem.drawings) {
    removeSelectionHandlers(
      this.selectedItem.drawings,
      drawingsProject.layers[drawingsLayers.selection],
    );
    this.selectedItemHandlers = undefined;
  }

  if (itemName) {
    this.selectedItem = {
      drawings : drawingsProject.layers[drawingsLayers.drawings].children[itemName],
      map      : mapProject.layers[mapLayers.drawings].children[itemName],
    };

    this.selectedItemHandlers = createSelectionHandlers(
      this.selectedItem.drawings,
      drawingsProject.layers[drawingsLayers.selection],
    );
  }
}
