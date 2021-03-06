import triggerUpload from './triggerUpload';

describe('Utils : triggerUpload', () => {
  let input;
  let file;

  beforeEach(() => {
    input = {
      click : jest.fn(),
    };
    global.document.createElement = jest.fn(() => input);
    file = {};
  });

  test('Correct upload', async () => {
    input.files = [file];
    const promise = triggerUpload();

    input.onchange();

    await expect(promise).resolves.toBe(file);
  });

  test('Incorrect upload', async () => {
    const promise = triggerUpload();

    input.onchange();

    await expect(promise).rejects.toBeUndefined();
  });
});
