import { Log } from '#utils';

import create from './create';
import revokeAll from './revokeAll';

export default () => {
  Log.info('Service : Urls : create');

  const scope = Object.seal({
    urls : [],
  });

  return Object.freeze({
    create    : create.bind(scope),
    revokeAll : revokeAll.bind(scope),
  });
};
