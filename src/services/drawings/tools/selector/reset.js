/**
 * Reset tool.
 * Used when mouse down hit no actionable item.
 */
export default function reset() {
  this.selectedItem.selected = false;
  this.selectedItem = undefined;
  this.currentPoint = undefined;
  this.operation = undefined;
}
