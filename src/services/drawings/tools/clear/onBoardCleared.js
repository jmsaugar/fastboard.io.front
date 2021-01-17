import { Log } from '#utils';

/**
 * Handler for board clear message.
 *
 * Deals with the project logic.
 */
export default function onBoardCleared() {
  Log.info('Service : Drawings : Tools : Clear : onBoardCleared');

  this.dependencies.projects.drawings.clear(); // @todo recreate layers
  this.dependencies.projects.map.clear();
}
