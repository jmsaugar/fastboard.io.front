import { Log, noop } from '#utils';
import { drawingsMessages, tools } from '#constants';

import onBoardCleared from './onBoardCleared';

/**
* Clear the board and send the message.
 */
export default function activate() {
  Log.info('Service : Drawings : Tools : Clear : activate');

  onBoardCleared.call(this);

  this.dependencies.realtimeService.send(
    drawingsMessages.doClearBoard,
    { tool : tools.clear },
  ).catch(noop); // @todo decide what to do with those cases
}
