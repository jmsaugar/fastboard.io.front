import setPreventUnload from './setPreventUnload';

describe('Utils : setPreventUnload', () => {
  beforeEach(() => {
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();
  });

  test('Enable prevent unload', () => {
    setPreventUnload(true);

    expect(window.addEventListener).toHaveBeenCalledTimes(1);
    expect(window.removeEventListener).toHaveBeenCalledTimes(0);
  });

  test('Disable prevent unload', () => {
    setPreventUnload(false);

    expect(window.addEventListener).toHaveBeenCalledTimes(0);
    expect(window.removeEventListener).toHaveBeenCalledTimes(1);
  });
});
