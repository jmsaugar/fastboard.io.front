import { Project, Path, Point, Tool } from 'paper';

let project;
let currentPath;

// @todo temporal drawing test
const tools = Object.freeze({
  selection : new Tool(),
});

tools.selection.onMouseDown = (event) => {
  currentPath = new Path();
  currentPath.add(event.point);
  currentPath.strokeColor = 'black';
};

tools.selection.onMouseDrag = (event) => {
  currentPath.add(event.point);
};

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
}

export default {
  init,
  close,
};
