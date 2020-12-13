import { Log } from '#utils';

import { createSelectionHandlers, removeSelectionHandlers } from '../utils';

/**
 * Activate selector tool.
 */
export default function activate(itemName) {
  Log.debug('Service : Drawings : Tools : Selector : activate');

  this.tool.activate();

  if (this.selectedItem) {
    removeSelectionHandlers(
      this.selectedItem,
      this.dependencies.project.layers.selection,
    );
    this.selectedItemHandlers = undefined;
  }

  if (itemName) {
    this.selectedItem = this.dependencies.project.layers.drawings.children[itemName];
    this.selectedItemHandlers = createSelectionHandlers(
      this.selectedItem,
      this.dependencies.project.layers.selection,
    );
  }
}
