import { Log } from '#utils';
import { drawingsLayers } from '#constants';

import { createSelectionHandlers, removeSelectionHandlers } from '../utils';

/**
 * Activate selector tool.
 */
export default function activate(itemName) {
  Log.debug('Service : Drawings : Tools : Selector : activate');

  const { project } = this.dependencies;

  this.tool.activate();

  if (this.selectedItem) {
    removeSelectionHandlers(
      this.selectedItem,
      project.layers[drawingsLayers.selection],
    );
    this.selectedItemHandlers = undefined;
  }

  if (itemName) {
    this.selectedItem = project.layers[drawingsLayers.drawings].children[itemName];
    this.selectedItemHandlers = createSelectionHandlers(
      this.selectedItem,
      project.layers[drawingsLayers.selection],
    );
  }
}
