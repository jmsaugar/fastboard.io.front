import { timeoutPromise } from './utils';

const resolved = 'resolved';
const rejected = 'rejected';

describe('Utils functions', () => {
  test('timeoutPromise - manual resolve', () => {
    const promise = timeoutPromise((res) => {
      res(resolved);
    }, 10000);

    return expect(promise).resolves.toBe(resolved);
  });

  test('timeoutPromise - manual rejection', () => {
    const promise = timeoutPromise((_, rej) => {
      rej(rejected);
    }, 10000);

    return expect(promise).rejects.toThrow(rejected);
  });

  test('timeoutPromise - timeout rejection', () => {
    const promise = timeoutPromise(() => {}, 1000);

    return expect(promise).rejects.toThrow();
  });
});
