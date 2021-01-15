import { Path } from 'paper';

import { layers } from '#constants';
import { Log, point2net } from '#utils';

const strokeWidth = 2;
const strokeCap = 'round';

// @tod check return values to not be send to network if no valid action
export default function onMouseDown(event) {
  Log.debug('Service : Drawings : Tools : Pencil : onMouseDown', { event });

  const element = event.event.path[0];
  if (element.id !== 'drawings-canvas') { // @todo read from constants and put in a function to be used by other tools
    return {};
  }

  const point = point2net(event.point);
  const strokeColor = event.strokeColor || this.strokeColor;

  // Add path to drawings project
  this.currentPath.drawings = new Path({
    strokeColor,
    strokeWidth,
    strokeCap,
    parent : this.dependencies.projects.drawings.layers[layers.drawings],
  });
  this.currentPath.drawings.add(point);

  // Add path to map project
  this.currentPath.map = new Path({
    strokeColor,
    strokeCap,
    strokeWidth   : 1, // @todo half the equivalen on the drawings project
    strokeScaling : false,
    parent        : this.dependencies.projects.map.activeLayer,
  });
  this.currentPath.map.add(point);

  return { point, strokeColor };
}
