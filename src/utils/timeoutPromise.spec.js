import timeoutPromise from './timeoutPromise';

const resolved = 'resolved';
const rejected = 'rejected';

describe('timeoutPromise', () => {
  test('Manual resolve', () => {
    const promise = timeoutPromise((res) => {
      res(resolved);
    }, 10000);

    return expect(promise).resolves.toBe(resolved);
  });

  test('Manual rejection', () => {
    const promise = timeoutPromise((_, rej) => {
      rej(rejected);
    }, 10000);

    return expect(promise).rejects.toThrow(rejected);
  });

  test('Timeout rejection', () => {
    const promise = timeoutPromise(() => {}, 1000);

    return expect(promise).rejects.toThrow();
  });
});
