import getScaleFactor from './getScaleFactor';

describe('Utils : getScaleFactor', () => {
  test('Correct values', () => {
    expect(getScaleFactor(0.5, 10, 10, 20, 20)).toBe(1);
    expect(getScaleFactor(0.1, 10, 10, 20, 20)).toBe(0.2);
    expect(getScaleFactor(0.1, 1, 10, 20, 20)).toBe(0.2);
    expect(getScaleFactor(0.1, 10, 1, 20, 20)).toBe(0.2);
  });

  test('Incorrect values', () => {
    expect(() => getScaleFactor(-1, 10, 10, 20, 20)).toThrow();
    expect(() => getScaleFactor(0.5, -1, 10, 20, 20)).toThrow();
    expect(() => getScaleFactor(0.5, 10, -0, 20, 20)).toThrow();
    expect(() => getScaleFactor(0.5, 10, 10, -1, 20)).toThrow();
    expect(() => getScaleFactor(0.5, 10, 10, 20, -1)).toThrow();
  });
});
