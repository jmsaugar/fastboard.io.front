import { Log } from '#utils';

import activate from './activate';
import onImageAdded from './onImageAdded';

export default (dependencies) => {
  Log.info('Service : Drawings : Tools : Image : create', { dependencies });

  const scope = {
    dependencies : {
      urlsService     : dependencies?.urlsService,
      realtimeService : dependencies?.realtimeService,
      project         : dependencies?.project,
    },
  };

  return Object.freeze({
    activate     : activate.bind(scope),
    onImageAdded : onImageAdded.bind(scope),
  });
};
