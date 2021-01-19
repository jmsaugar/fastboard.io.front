import { drawingsLayers } from '#constants';

import { removeSelectionHandlers } from '../utils';

/**
 * Reset tool.
 * Used when mouse down hit no actionable item.
 */
export default function reset() {
  if (this.selectedItem.drawings) {
    removeSelectionHandlers(
      this.selectedItem.drawings,
      this.dependencies.projects.drawings.layers[drawingsLayers.selection],
    );

    this.selectedItem = {
      drawings : undefined,
      map      : undefined,
    };
    this.selectedItemHandlers = undefined;
  }

  this.operation = undefined;
  this.currentTranslationPoint = undefined;
  this.currentRotationAngle = undefined;
  this.resizeOriginBound = undefined;
}
