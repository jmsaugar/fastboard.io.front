import ReactGA from 'react-ga';

import { allowCookiesStorageKey } from '#constants';

import eventTypes from '../eventTypes';

/**
 * Register a page view in Analytics.
 *
 * @see https://github.com/react-ga/react-ga#reactgapageviewpath
 *
 * @param {String} path Path to register the page view with.
 */
export default function pageview(path) {
  if (!this.isStarted || !window.localStorage.getItem(allowCookiesStorageKey)) {
    this.buffer.push({ type : eventTypes.pageview, data : path });
    return;
  }

  ReactGA.pageview(path);
}
