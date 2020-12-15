import validBoardId from './validBoardId';

describe('Utils : validBoardId', () => {
  test('Correct values', () => {
    expect(validBoardId('123456')).toBe(true);
    expect(validBoardId('000000')).toBe(true);
    expect(validBoardId('999999')).toBe(true);
  });

  test('Incorrect values', () => {
    expect(validBoardId()).toBe(false);
    expect(validBoardId(null)).toBe(false);
    expect(validBoardId(true)).toBe(false);
    expect(validBoardId(false)).toBe(false);
    expect(validBoardId({})).toBe(false);
    expect(validBoardId(123)).toBe(false);
    expect(validBoardId(123456)).toBe(false);
    expect(validBoardId('12345')).toBe(false);
    expect(validBoardId('1234567')).toBe(false);
    expect(validBoardId('123 456')).toBe(false);
    expect(validBoardId('123-456')).toBe(false);
    expect(validBoardId('a23456')).toBe(false);
    expect(validBoardId('?23456')).toBe(false);
    expect(validBoardId(' 123456 ')).toBe(false);
  });
});
