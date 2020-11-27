import { Log } from '#utils';

/**
 * Close project.
 */
export default function stop() {
  Log.info('Service : Drawings : stop');

  this.project.remove();
  this.project = undefined;
  this.users = {};
  this.tools = {};
  this.isStarted = false;
}
