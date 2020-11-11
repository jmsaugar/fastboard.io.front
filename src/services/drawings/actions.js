import { Project } from 'paper';

import { Log } from '#utils';
import { tools } from '#constants';

import { eraserToolFactory, pencilToolFactory } from './tools';

/**
 * Inject service dependencies.
 *
 * @param {Object} params Dependencies { realtimeService }.
 *
 * @throws {Error} In case dependencies are not passed.
 */
function injectDependencies({ realtimeService }) {
  Log.info('Services : Drawings : injectDependencies', { realtimeService });

  if (!realtimeService) {
    throw new Error('Services : Drawings : injectDependencies : missing dependencies');
  }

  this.dependencies = { realtimeService };
}

/**
 * Start project for the specified canvas.
 *
 * @param {String} canvasId Id of the canvas html element.
 */
function start(canvasId) {
  Log.info('Service : Drawings : start', { canvasId });

  if (!this.isStarted) {
    this.project = new Project(canvasId);
    this.isStarted = true;

    this.tools = {
      [tools.pencil] : pencilToolFactory({ realtimeService : this.dependencies.realtimeService }),
      [tools.eraser] : eraserToolFactory({ realtimeService : this.dependencies.realtimeService }),
    };

    Log.debug('Service : Drawings : start : started');
  }
}

/**
 * Close project.
 */
function stop() {
  Log.info('Service : Drawings : stop');

  this.project.close();
  this.project = undefined;
  this.users = {};
  this.tools = {};
  this.isStarted = false;
}

/**
 * Add a remote user whose drawings have to be handled.
 *
 * @param {String} userId Id of the new user.
 */
function addUser(userId) {
  Log.info('Services : Drawings : addUser', { userId });

  this.users[userId] = {};
}

/**
 * Remove an user whose drawings were being handled.
 *
 * @param {String} userId Id of the user to be removed.
 */
function removeUser(userId) {
  Log.info('Services : Drawings : removeUser', { userId });

  delete this.users[userId];
}

export {
  injectDependencies,
  start,
  stop,
  addUser,
  removeUser,
};
