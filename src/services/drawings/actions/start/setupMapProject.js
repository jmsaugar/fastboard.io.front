import { mapZoom } from '#constants';

/**
 * Setup Paper project used for navigation map.
 *
 * @param {Object} project Paperjs navigation map project.
 */
export default function setupMapProject(project) {
  project.view.setZoom(mapZoom);
  project.view.setCenter(0, 0);
}
