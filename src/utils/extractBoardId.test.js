import extractBoardId from './extractBoardId';

describe('Utils : extractBoardId', () => {
  test('Correct values', () => {
    expect(extractBoardId('https://fastboard.io/board/123456')).toBe('123456');
    expect(extractBoardId('https://fastboard.io/board/000000')).toBe('000000');
    expect(extractBoardId('https://fastboard.io/board/999999')).toBe('999999');
  });

  test('Inorrect values', () => {
    expect(extractBoardId('https://fastboard.io/board/1234567')).toBeUndefined();
    expect(extractBoardId('https://fastboard.io/123456')).toBeUndefined();
    expect(extractBoardId('foo')).toBeUndefined();
    expect(extractBoardId(null)).toBeUndefined();
  });
});
