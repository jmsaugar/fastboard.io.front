import throttle from './throttle';

describe('throttle', () => {
  let counter;
  let callback;

  beforeEach(() => {
    counter = 0;
    callback = jest.fn(() => {
      counter += 1;
    });
  });

  test('Correctly use throttle', () => {
    const throttledFn = throttle(callback, 100000);

    throttledFn();
    throttledFn();
    throttledFn();

    expect(callback).toHaveBeenCalledTimes(1);
    expect(counter).toBe(1);
  });
});
