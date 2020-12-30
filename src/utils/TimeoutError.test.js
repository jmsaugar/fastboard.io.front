import TimeoutError from './TimeoutError';

const code = 123;

describe('Utils : TimeoutError', () => {
  test('Is correctly built', () => {
    const error = new TimeoutError(code);

    expect(error).toBeInstanceOf(TimeoutError);
    expect(error.code).toBe(code);
  });
});
