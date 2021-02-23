import {
  setup, start, pageview, event,
} from './actions';

export default () => {
  const scope = Object.seal({
    isStarted   : false,
    analyticsId : undefined,
    buffer      : [],
  });

  return Object.freeze({
    setup    : setup.bind(scope),
    start    : start.bind(scope),
    pageview : pageview.bind(scope),
    event    : event.bind(scope),
  });
};
