import { Project, Path, Point, Tool } from 'paper';

import { boardsService } from '../services';
import { drawingsEvents } from '../constants';
import { throttle } from '../utils';
import boards from './boards';

let project;
let currentPath;

// @todo temporal drawing test
const tools = Object.freeze({
  pencil : new Tool(),
});

// Logic operations

const onMouseDown = (event) => {
  console.log('!!!.onMouseDown', event);
  currentPath = new Path();
  currentPath.add(event.point);
  currentPath.strokeColor = 'black';
};

const onMouseDrag = (event) => {
  console.log('!!!.onMouseDrag', event);
  currentPath.add(event.point);
};

// Tools operations

tools.pencil.onMouseDown = (event) => {
  onMouseDown(event);
  boardsService.send(drawingsEvents.onMouseDown, {
    point : {
      x : event.point.x,
      y : event.point.y,
    },
  });
};

const pencilOnMouseDrag = (event) => {
  onMouseDrag(event);
  boardsService.send(drawingsEvents.onMouseDrag, {
    point : {
      x : event.point.x,
      y : event.point.y,
    },
  });
};

tools.pencil.onMouseDrag = throttle(pencilOnMouseDrag, 10);

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
