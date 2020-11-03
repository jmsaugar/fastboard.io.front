import { Project } from 'paper';

import { Log } from '#utils';

/**
 * Initialize project for the specified canvas.
 *
 * @param {String} canvasId Id of the canvas html element.
 */
function init(canvasId) {
  Log.info('Service : Drawings : init', { canvasId });

  if (!this.project) {
    this.project = new Project(canvasId);
    this.isInit = true;

    Log.debug('Service : Drawings : init : initialized');
  }
}

/**
 * Close project.
 */
function close() {
  Log.info('Service : Drawings : close');

  this.project.close();
  this.project = undefined;
  this.isInit = false;
}

export {
  init,
  close,
};
