import { Log } from '#utils';
import { drawingsLayers, mapLayers } from '#constants';

/**
 * Handle onBoardState event from a remote user.
 *
 * @param {Object} data Object with the board state to be replicated { state }
 */
export default function onBoardState(data) {
  Log.debug('Service : Drawings : onBoardState');

  this.projects.drawings.layers[drawingsLayers.drawings].importJSON(data.state);
  this.projects.map.layers[mapLayers.drawings].importJSON(data.state);
}
