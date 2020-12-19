import isStarted from './isStarted';

describe('Service : realtime : isStarted', () => {
  let scope;

  beforeEach(() => {
    scope = {
      isStarted : true,
    };
  });

  test('isStarted working correctly', () => {
    expect(isStarted.call(scope)).toBe(scope.isStarted);
  });
});
