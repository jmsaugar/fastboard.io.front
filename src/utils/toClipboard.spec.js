import toClipboard from './toClipboard';

const text = 'test text';

describe('Utils : toClipboard', () => {
  let promise;

  beforeEach(() => {
    promise = new Promise(() => {});

    global.navigator.clipboard = {
      writeText : jest.fn(() => promise),
    };
  });

  test('Copy to clipboard', () => {
    expect(toClipboard(text)).toBe(promise);

    expect(global.navigator.clipboard.writeText).toHaveBeenCalledTimes(1);
    expect(global.navigator.clipboard.writeText).toHaveBeenCalledWith(text);
  });
});
