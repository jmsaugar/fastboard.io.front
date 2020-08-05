import { Project, Path, Point, Tool } from 'paper';

import { boardsService } from '../services';
import { drawingsEvents } from '../constants';
import { throttle } from '../utils';
import boards from './boards';

let project;
let currentPath; // @todo this should be for every user

const tools = Object.freeze({
  pencil : new Tool(),
  eraser : new Tool(),
});

// Logic operations

const onMouseDown = (point, color = 'red') => {
  currentPath = new Path();
  currentPath.add(point);
  currentPath.strokeColor = color;
};

const onMouseDrag = (point) => {
  currentPath.add(point);
};

// Tools operations

/**
 * PENCIL
 * 
 * Mouse down operation
 * 
 * @param {Object} event Event emitted by paperjs
 */
tools.pencil.onMouseDown = (event) => {
  // Data required by the event
  const color = 'black'; // @todo this should come from config
  const point = {
    x : event.point.x,
    y : event.point.y,
  };

  // Local event logic
  onMouseDown(point, color);

  // Send event through network
  boardsService.send(drawingsEvents.onMouseDown, { point, color });
};

/**
 * PENCIL
 * 
 * Mouse drag operation
 * 
 * @param {Object} event Event emitted by paperjs
 */
const pencilOnMouseDrag = (event) => {
  // Data required by the event
  const point = {
    x : event.point.x,
    y : event.point.y,
  };

  // Local event logic
  onMouseDrag(point);

  // Send event through network
  boardsService.send(drawingsEvents.onMouseDrag, { point });
};

// Pencil actual mouse drag assignment - throttled
tools.pencil.onMouseDrag = throttle(pencilOnMouseDrag, 10);



// Eraser

tools.eraser.onMouseDown = (event) => {
  onMouseDown(event);
  boardsService.send(drawingsEvents.onMouseDown, {
    point : {
      x : event.point.x,
      y : event.point.y,
    },
  });
};

// Misc service operations

/**
 * Initialize project for the specified canvas.
 * 
 * @param {String} canvasId Id of the canvas html element.
 */
const init = (canvasId) => {
  project = new Project(canvasId);
};

/**
 * Close project.
 */
const close = () => {
  project.close();
  project = undefined;
};

export default {
  init,
  close,
  onMouseDown,
  onMouseDrag,
};
