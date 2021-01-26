import { drawingsLayers, mapLayers } from '#constants';

import { operations } from './constants';
import reset from './reset';

/**
 * Process selection operation start received from another user.
 *
 * {@link ./onMouseDown.js}
 *
 * @param {Object} params Operation parameters { point, operation, itemName, boundsHit }
 */
export default function onOperationStart({
  point, operation, itemName, boundsHit,
}) {
  const drawingsProject = this.dependencies.projects.drawings;
  const mapProject = this.dependencies.projects.map;

  this.operation = operation;
  this.selectedItem = {
    drawings : drawingsProject.layers[drawingsLayers.drawings].children[itemName],
    map      : mapProject.layers[mapLayers.drawings].children[itemName],
  };

  if (!this.selectedItem.drawings || !this.selectedItem.map) {
    reset.call(this);
    return;
  }

  if (boundsHit) {
    switch (operation) {
      case operations.rotate:
        this.currentRotationAngle = 0;
        break;

      case operations.resize:
        this.resizeOriginBound = boundsHit;
        break;

      default:
        break;
    }
  } else {
    this.currentTranslationPoint = point;
  }
}
