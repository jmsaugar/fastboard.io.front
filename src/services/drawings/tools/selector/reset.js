import { removeSelectionHandlers } from '../utils';

/**
 * Reset tool.
 * Used when mouse down hit no actionable item.
 */
export default function reset() {
  if (this.selectedItem) {
    removeSelectionHandlers(
      this.selectedItem,
      this.dependencies.project.layers.selection,
    );

    this.selectedItem = undefined;
    this.selectedItemHandlers = undefined;
  }

  this.operation = undefined;
  this.currentTranslationPoint = undefined;
  this.currentRotationAngle = undefined;
  this.resizeOriginBound = undefined;
}
