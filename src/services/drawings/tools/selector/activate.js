import { Log } from '#utils';
import { drawingsLayers, mapLayers } from '#constants';

import reset from './reset';
import { createSelectionHandlers } from './selectionHandlers';

/**
 * Activate selection tool.
 *
 * @param {String} itemName Item to be selected by default. Can be undefined.
 */
export default function activate(itemName) {
  Log.debug('Service : Drawings : Tools : Selector : activate', { itemName });

  // If there is a previous selection, remove it
  if (this.selectedItem.drawings) {
    reset.call(this);
  }

  // In case an item is to be selected by default
  if (itemName) {
    const { drawings : drawingsProject, map : mapProject } = this.dependencies.projects;

    this.selectedItem = {
      drawings : drawingsProject.layers[drawingsLayers.drawings].children[itemName],
      map      : mapProject.layers[mapLayers.drawings].children[itemName],
    };

    this.selectedItem.handlers = createSelectionHandlers(
      this.selectedItem.drawings,
      drawingsProject.layers[drawingsLayers.selection],
    );
  }

  this.tool.activate();
}
