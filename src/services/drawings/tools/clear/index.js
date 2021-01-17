import { Log } from '#utils';

import activate from './activate';
import onBoardCleared from './onBoardCleared';

export default (dependencies) => {
  Log.info('Service : Drawings : Tools : Clear : create');

  const scope = {
    dependencies : {
      realtimeService : dependencies?.realtimeService,
      projects        : {
        drawings : dependencies?.drawingsProject,
        map      : dependencies?.mapProject,
      },
    },
  };

  return Object.freeze({
    activate       : activate.bind(scope),
    onBoardCleared : onBoardCleared.bind(scope),
  });
};
