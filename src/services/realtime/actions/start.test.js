import io from 'socket.io-client';

import start from './start';

jest.mock(
  'socket.io-client',
  () => jest.fn().mockImplementation(() => ({
    __esModule : true,
    default    : jest.fn(),
  })),
);

describe('Service : realtime : start', () => {
  let scope;

  beforeEach(() => {
    scope = {
      isStarted : false,
    };
    io.mockClear();
  });

  test('start is working correctly', () => {
    start.call(scope);

    expect(scope.isStarted).toBe(true);
    expect(io).toHaveBeenCalledTimes(1);
  });

  test('Do nothing if already started', () => {
    scope.isStarted = true;
    start.call(scope);

    expect(scope.isStarted).toBe(true);
    expect(io).toHaveBeenCalledTimes(0);
  });
});
