import ReactGA from 'react-ga';

import eventTypes from '../eventTypes';

/**
 * Process buffer of analytics events.
 */
export default function processBuffer() {
  this.buffer.forEach(({ type, data }) => {
    switch (type) {
      case eventTypes.event:
        ReactGA.event(data);
        break;

      case eventTypes.pageview:
        ReactGA.pageview(data);
        break;

      default:
        break;
    }
  });
  this.buffer = [];
}
