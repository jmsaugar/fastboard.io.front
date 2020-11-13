import { Log } from '#utils';
import { drawingsMessages, tools } from '#constants';

/**
 * Handler for board clear message.
 *
 * Deals with the project logic.
 */
function onBoardCleared() {
  Log.info('Services : Drawings : Tools : Clear : onBoardCleared');

  this.dependencies.project.clear();
}

/**
 * Clear the board and send the message.
 */
function activate() {
  Log.info('Services : Drawings : Tools : Clear : activate');

  onBoardCleared.call(this);

  this.dependencies.realtimeService.send(
    drawingsMessages.doClearBoard,
    { tool : tools.clear },
  ); // @todo .catch?
}

export default (dependencies) => {
  Log.info('Services : Drawings : Tools : Clear : create');

  const scope = {
    dependencies : {
      realtimeService : dependencies?.realtimeService,
      project         : dependencies?.project,
    },
  };

  return Object.freeze({
    activate       : activate.bind(scope),
    onBoardCleared : onBoardCleared.bind(scope),
  });
};
