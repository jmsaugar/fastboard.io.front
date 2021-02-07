import { Log } from '#utils';

import activate from './activate';
import onImageAdded from './onImageAdded';

export default (dependencies) => {
  Log.info('Service : Drawings : Tools : Image : create', { dependencies });

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
    activate     : activate.bind(scope),
    onImageAdded : onImageAdded.bind(scope),
  });
};
