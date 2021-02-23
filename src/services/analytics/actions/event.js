import ReactGA from 'react-ga';

import { allowCookiesStorageKey } from '#constants';

import eventTypes from '../eventTypes';

/**
 * Register an event in Analytics.
 *
 * @see https://github.com/react-ga/react-ga#reactgaeventargs
 *
 * @param {Object} eventObject Object containing the event information.
 */
export default function event(eventObject) {
  if (!this.isStarted || !window.localStorage.getItem(allowCookiesStorageKey)) {
    this.buffer.push({ type : eventTypes.event, data : eventObject });
    return;
  }

  ReactGA.event(eventObject);
}
