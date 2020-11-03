import { Path, Tool } from 'paper';

import { drawingsMessages } from '../../../constants';
import { Log, throttle } from '../../../utils';
import boardsService from '../../boards';

const eraserTool = new Tool();

const strokeColor = 'white';
const strokeWidth = 10;

let currentPath;

/**
 * Eraser - onMouseDown
 *
 * Add a new point to a new path with the eraser stroke size and color.
 *
 * @param {Object} event Mouse down event.
 */
eraserTool.onMouseDown = (event) => {
  Log.debug('Service : Drawings : tools : eraser : onMouseDown', { event });

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
 * Eraser - onMouseDrag
 *
 * Add a new point to the current path with the eraser stroke size and color.
 *
 * @param {Object} event Mouse down event.
 */
eraserTool.onMouseDrag = throttle((event) => {
  // Data required by the event
  const point = {
    x : event.point.x,
    y : event.point.y,
  };

  currentPath.add(point);

  // Send event through network
  boardsService.send(drawingsMessages.onMouseDrag, { point });
}, 10);

export default eraserTool;
