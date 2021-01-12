import validBoardUrl from './validBoardUrl';

describe('Utils : validBoardUrl', () => {
  test('Correct values', () => {
    expect(validBoardUrl('https://fastboard.io/board/123456')).toBe(true);
    expect(validBoardUrl('https://fastboard.io/board/654321')).toBe(true);
    expect(validBoardUrl('https://fastboard.io/board/000000')).toBe(true);
    expect(validBoardUrl('https://fastboard.io/board/999999')).toBe(true);
  });

  test('Incorrect values', () => {
    expect(validBoardUrl()).toBe(false);
    expect(validBoardUrl(null)).toBe(false);
    expect(validBoardUrl(true)).toBe(false);
    expect(validBoardUrl(false)).toBe(false);
    expect(validBoardUrl({})).toBe(false);
    expect(validBoardUrl(123)).toBe(false);
    expect(validBoardUrl(123456)).toBe(false);
    expect(validBoardUrl('12345')).toBe(false);
    expect(validBoardUrl('1234567')).toBe(false);
    expect(validBoardUrl('123 456')).toBe(false);
    expect(validBoardUrl('123-456')).toBe(false);
    expect(validBoardUrl('a23456')).toBe(false);
    expect(validBoardUrl('?23456')).toBe(false);
    expect(validBoardUrl(' 123456 ')).toBe(false);
    expect(validBoardUrl('https://fastboard.io/board/12345')).toBe(false);
    expect(validBoardUrl('https://fastboard.io/board/')).toBe(false);
    expect(validBoardUrl('https://fastboard.io/board/aaaaaa')).toBe(false);
    expect(validBoardUrl('fastboard.io/board/123456')).toBe(false);
    expect(validBoardUrl('http://fastboard.io/board/123456')).toBe(false);
  });
});
