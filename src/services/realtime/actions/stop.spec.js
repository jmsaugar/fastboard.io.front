import stop from './stop';

describe('Service : realtime : stop', () => {
  let scope;
  let closeFn;

  beforeEach(() => {
    closeFn = jest.fn();

    scope = {
      isStarted : true,
      socket    : {
        close : closeFn,
      },
    };
  });

  test('stop is working correctlty', () => {
    stop.call(scope);

    expect(scope.isStarted).toBe(false);
    expect(scope.socket).toBeUndefined();
    expect(closeFn).toHaveBeenCalledTimes(1);
  });
});
