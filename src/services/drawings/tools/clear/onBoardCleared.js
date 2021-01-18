import { Log } from '#utils';
import { drawingsLayers, mapLayers } from '#constants';

/**
 * Handler for board clear message.
 *
 * Deals with the project logic.
 */
export default function onBoardCleared() {
  Log.info('Service : Drawings : Tools : Clear : onBoardCleared');

  this.dependencies.projects.drawings.layers[drawingsLayers.drawings].clear();
  this.dependencies.projects.drawings.layers[drawingsLayers.selection].clear();
  this.dependencies.projects.map.layers[mapLayers.drawings].clear();
}
