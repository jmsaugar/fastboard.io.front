import { Log } from '#utils';

/**
 * Handler for board clear message.
 *
 * Deals with the project logic.
 */
export default function onBoardCleared() {
  Log.info('Services : Drawings : Tools : Clear : onBoardCleared');

  this.dependencies.project.clear();
}
