import { Log } from '#utils';

/**
 * Stop drawings service and remove
 * its Paper.js projects.
 */
export default function stop() {
  Log.info('Service : Drawings : stop');

  if (this.projects.drawings) {
    this.projects.drawings.remove();
  }

  if (this.projects.map) {
    this.projects.map.remove();
  }

  this.projects = {
    drawings : undefined,
    map      : undefined,
  };
  this.users = {};
  this.tools = {};
  this.isStarted = false;
}
