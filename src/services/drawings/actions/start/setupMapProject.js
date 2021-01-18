import { Layer } from 'paper';

import { mapLayers, mapZoom } from '#constants';

/**
 * Setup Paper project used for navigation map.
 *
 * @param {Object} project Paperjs navigation map project.
 */
export default function setupMapProject(project) {
  project.view.setZoom(mapZoom);
  project.view.setCenter(0, 0);

  /**
   * Viewport layer has to be the last one to be created
   * in order for it to appear over the drawings.
   * */
  project.addLayer(new Layer({ name : mapLayers.drawings }));
  project.addLayer(new Layer({ name : mapLayers.viewport }));
}
