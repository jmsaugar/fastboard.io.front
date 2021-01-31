import { drawingsLayers } from '#constants';
import store, { setSelectorCursorOperation, setSelectorCursorHover, hideItemMenu } from '#store';

import { removeSelectionHandlers } from './selectionHandlers';

/**
 * Reset the selection tool.
 */
export default function reset() {
  if (this.selectedItem.handlers) {
    removeSelectionHandlers(
      this.dependencies.projects.drawings.layers[drawingsLayers.selection],
    );
  }

  this.selectedItem = {
    drawings : undefined,
    map      : undefined,
    handlers : undefined,
  };

  this.operation = {};

  store.dispatch(setSelectorCursorOperation());
  store.dispatch(setSelectorCursorHover());
  store.dispatch(hideItemMenu());
}
