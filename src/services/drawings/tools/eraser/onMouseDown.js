import { Path } from 'paper';

import { drawingsLayers, mapLayers, canvasIds } from '#constants';
import { Log, point2net } from '#utils';

const strokeColor = 'white';
const strokeWidth = 20;
const strokeCap = 'round';

/**
 * Mouse down event eraser handler.
 *
 * Draws on the drawings and map canvases.
 *
 * @param {Object} event Mouse down event.
 *
 * @returns {Object|undefined} Eraser drawing information or undefined if not applicable.
 */
export default function onMouseDown(event) {
  Log.debug('Service : Drawings : Tools : Eraser : onMouseDown', { event });

  // Check that the event is triggered on the drawings canvas
  const eventData = event?.event;
  if (eventData && eventData?.target?.id !== canvasIds.drawings) {
    return undefined;
  }

  const point = point2net(event.point);

  // Add path to drawings project
  this.currentPath.drawings = new Path({
    strokeColor,
    strokeWidth,
    strokeCap,
    parent : this.dependencies.projects.drawings.layers[drawingsLayers.drawings],
  });
  this.currentPath.drawings.add(point);

  // Add path to map project
  this.currentPath.map = new Path({
    strokeColor,
    strokeCap,
    strokeWidth   : strokeWidth / 10,
    strokeScaling : false,
    locked        : true,
    parent        : this.dependencies.projects.map.layers[mapLayers.drawings],
  });
  this.currentPath.map.add(point);

  return { point, strokeColor };
}
