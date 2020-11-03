import { Path, Tool } from 'paper';

import { drawingsMessages } from '#constants';
import { Log, throttle } from '#utils';
import boardsService from '../../boards';

const pencilTool = new Tool();

let strokeColor = 'red';
let strokeWidth = 1;

let currentPath;

/**
 * Pencil - onMouseDown
 *
 * Add a new point to a new path with the pencil stroke size and color.
 *
 * @param {Object} event Mouse down event.
 */
pencilTool.onMouseDown = (event) => {
  Log.debug('Service : Drawings : tools : pencil : onMouseDown', { event });

  // Data required by the event
  const point = {
    x : event.point.x,
    y : event.point.y,
  };

  currentPath = new Path({ strokeColor, strokeWidth });
  currentPath.add(point);

  // Send event through network
  boardsService.send(drawingsMessages.onMouseDown, { point, strokeColor });
};

/**
 * Pencil - onMouseDrag
 *
 * Add a new point to the current path with the pencil stroke size and color.
 *
 * @param {Object} event Mouse down event.
 */
pencilTool.onMouseDrag = throttle((event) => {
  // Data required by the event
  const point = {
    x : event.point.x,
    y : event.point.y,
  };

  currentPath.add(point);

  // Send event through network
  boardsService.send(drawingsMessages.onMouseDrag, { point });
}, 10);

export default pencilTool;
