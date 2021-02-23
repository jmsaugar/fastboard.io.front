import ReactGA from 'react-ga';

import { Log } from '#utils';
import { allowCookiesStorageKey } from '#constants';

import processBuffer from './processBuffer';

/**
 * Start analytics service. Will only start if:
 * - analytics id is set
 * - cookies have been explicitly allowed by the user
 *
 * @see https://github.com/react-ga/react-ga#reactgainitializegatrackingid-options
 */
export default function start() {
  Log.info('Service : Analytics : start');

  if (this.isStarted) {
    return;
  }

  if (this.analyticsId && window.localStorage.getItem(allowCookiesStorageKey)) {
    ReactGA.initialize(this.analyticsId);
    processBuffer.call(this);
    this.isStarted = true;
  }
}
