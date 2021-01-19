import { Log } from '#utils';

/**
 * Close project.
 */
export default function stop() {
  Log.info('Service : Drawings : stop');

  this.projects.drawings.remove();
  this.projects.map.remove();
  this.projects = {
    drawings : undefined,
    map      : undefined,
  };
  this.users = {};
  this.tools = {};
  this.isStarted = false;
}
