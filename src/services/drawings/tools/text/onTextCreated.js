import { drawingsLayers, mapLayers } from '#constants';

import { createItem } from './item';

/**
 * Create text handler
 *
 * @param {Object} params Params of the text item { point, color, itemName }
 */
export default function onTextCreated({ point, color, itemName }) {
  // Create text item in drawings projec
  this.currentText.drawings = createItem(
    point,
    color,
    itemName,
    this.dependencies.projects.drawings.layers[drawingsLayers.drawings],
  );

  // Create text item in map project
  this.currentText.map = createItem(
    point,
    color,
    itemName,
    this.dependencies.projects.map.layers[mapLayers.drawings],
  );
}
