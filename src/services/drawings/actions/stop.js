import { Log } from '#utils';

/**
 * Close project.
 */
export default function stop() {
  Log.info('Service : Drawings : stop');

  this.project.close();
  this.project = undefined;
  this.users = {};
  this.tools = {};
  this.isStarted = false;
}
