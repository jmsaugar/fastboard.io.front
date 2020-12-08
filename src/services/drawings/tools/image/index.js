import { Log } from '#utils';

import activate from './activate';
import onImageAdded from './onImageAdded';

export default (dependencies) => {
  Log.info('Services : Drawings : Tools : Image : create');

  const scope = {
    dependencies : {
      realtimeService : dependencies?.realtimeService,
      project         : dependencies?.project,
    },
  };

  return Object.freeze({
    activate     : activate.bind(scope),
    onImageAdded : onImageAdded.bind(scope),
  });
};
