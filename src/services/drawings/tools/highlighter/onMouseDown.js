import { Path } from 'paper';

import { drawingsLayers, mapLayers, canvasIds } from '#constants';
import { Log, point2net } from '#utils';

const strokeWidth = 25;
const opacity = 0.5;

/**
 * Mouse down event highlighter handler.
 *
 * Draws on the drawings and map canvases.
 *
 * @param {Object} event Mouse down event.
 *
 * @returns {Object|undefined} Highlighter drawing information or undefined if not applicable.
 */
export default function onMouseDown(event) {
  Log.debug('Service : Drawings : Tools : Highlighter : onMouseDown', { event });

  // @todo get canvas drawings id from dependencies?
  // Check that the event is triggered on the drawings canvas
  const element = event?.event?.path[0];
  if (element && element.id !== canvasIds.drawings) {
    return undefined;
  }

  const point = point2net(event.point);
  const strokeColor = event.strokeColor || this.strokeColor;

  // Add path to drawings project
  this.currentPath.drawings = new Path({
    opacity,
    strokeColor,
    strokeWidth,
    parent : this.dependencies.projects.drawings.layers[drawingsLayers.drawings],
  });
  this.currentPath.drawings.add(point);

  // Add path to map project
  this.currentPath.map = new Path({
    opacity,
    strokeColor,
    strokeWidth   : strokeWidth / 10,
    strokeScaling : false,
    locked        : true,
    parent        : this.dependencies.projects.map[mapLayers.drawings],
  });
  this.currentPath.map.add(point);

  return { point, strokeColor };
}
