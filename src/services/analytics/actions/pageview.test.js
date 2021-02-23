import ReactGA from 'react-ga';

import eventTypes from '../eventTypes';

import pageview from './pageview';

const path = '/testpath';

jest.mock('react-ga', () => ({
  __esModule : true,
  default    : {
    pageview : jest.fn(),
  },
}));

describe('Service : analytics : pageview', () => {
  let scope;

  beforeEach(() => {
    Storage.prototype.getItem = jest.fn(() => false);
    ReactGA.pageview.mockClear();

    scope = {
      isStarted : false,
      buffer    : [],
    };
  });

  test('Saves pageview in buffer if service not started', () => {
    Storage.prototype.getItem = jest.fn(() => true);
    pageview.call(scope, path);

    expect(scope.buffer).toHaveLength(1);
    expect(scope.buffer[0].data).toBe(path);
    expect(scope.buffer[0].type).toBe(eventTypes.pageview);
  });

  test('Saves pageview in buffer if cookies not allowed', () => {
    scope.isStarted = true;
    pageview.call(scope, path);

    expect(scope.buffer).toHaveLength(1);
    expect(scope.buffer[0].data).toBe(path);
    expect(scope.buffer[0].type).toBe(eventTypes.pageview);
  });

  test('Pageview is successfully processed', () => {
    scope.isStarted = true;
    Storage.prototype.getItem = jest.fn(() => true);
    pageview.call(scope, path);

    expect(scope.buffer).toHaveLength(0);
    expect(ReactGA.pageview).toHaveBeenCalledTimes(1);
    expect(ReactGA.pageview).toHaveBeenCalledWith(path);
  });
});
