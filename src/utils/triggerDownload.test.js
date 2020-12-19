import triggerDownload from './triggerDownload';

const fileName = 'testFileName';

describe('Utils : triggerDownload', () => {
  let clickFn;

  beforeEach(() => {
    clickFn = jest.fn();

    global.URL.createObjectURL = jest.fn(() => 'http://example.com');
    global.URL.revokeObjectURL = jest.fn();
    global.document.createElement = jest.fn(() => ({
      click : clickFn,
    }));
  });

  test('Correct download', () => {
    const blob = new Blob(['a', 'b', 'c']);

    triggerDownload(blob, fileName);

    expect(global.document.createElement).toHaveBeenCalledTimes(1);
    expect(global.URL.createObjectURL).toHaveBeenCalledTimes(1);
    expect(global.URL.revokeObjectURL).toHaveBeenCalledTimes(1);
    expect(clickFn).toHaveBeenCalledTimes(1);
  });
});
