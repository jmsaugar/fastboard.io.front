import { Layer } from 'paper';

import { drawingsLayers } from '#constants';

/**
 * Setup Paper project used for drawings.
 *
 * @param {Object} project Paperjs drawings project.
 * @param {Number} width Width of the drawings canvas element.
 * @param {Number} height Height of the drawings canvas element.
 */
export default function setupDrawingsProject(project, width, height) {
  project.view.setCenter(0, 0);
  project.view.setViewSize(width, height);

  project.addLayer(new Layer({ name : drawingsLayers.drawings }));
  project.addLayer(new Layer({ name : drawingsLayers.selection }));
}
