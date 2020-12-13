import { Log } from '#utils';

import {
  injectDependencies, start, stop, setMessageHandlers, send, isStarted,
} from './actions';

export default () => {
  Log.info('Service : Realtime : create');

  const scope = {
    dependencies : {},
    isStarted    : false,
    socket       : undefined,
  };

  return Object.freeze({
    injectDependencies : injectDependencies.bind(scope),
    start              : start.bind(scope),
    stop               : stop.bind(scope),
    setMessageHandlers : setMessageHandlers.bind(scope),
    send               : send.bind(scope),
    isStarted          : isStarted.bind(scope),
  });
};
