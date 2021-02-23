import ReactGA from 'react-ga';

import start from './start';

const analyticsId = '123';

jest.mock('react-ga', () => ({
  __esModule : true,
  default    : {
    initialize : jest.fn(),
  },
}));

describe('Service : analytics : start', () => {
  let scope;

  beforeEach(() => {
    Storage.prototype.getItem = jest.fn(() => false);
    ReactGA.initialize.mockClear();

    scope = {
      isStarted   : false,
      analyticsId : undefined,
      buffer      : [],
    };
  });

  test('Does nothing if already started', () => {
    scope.isStarted = true;
    start.call(scope);

    expect(ReactGA.initialize).toHaveBeenCalledTimes(0);
  });

  test('Does nothing if no analytics id', () => {
    start.call(scope);

    expect(ReactGA.initialize).toHaveBeenCalledTimes(0);
  });

  test('Does nothing if no cookies allowed', () => {
    scope.analyticsId = analyticsId;

    expect(ReactGA.initialize).toHaveBeenCalledTimes(0);
  });

  test('Is correctly started', () => {
    scope.analyticsId = analyticsId;
    Storage.prototype.getItem = jest.fn(() => true);

    start.call(scope);

    expect(ReactGA.initialize).toHaveBeenCalledTimes(1);
    expect(ReactGA.initialize).toHaveBeenCalledWith(analyticsId);
    expect(scope.isStarted).toBe(true);
  });
});
