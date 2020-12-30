import BoardError from './BoardError';

const code = 123;

describe('Utils : BoardError', () => {
  test('Is correctly built', () => {
    const error = new BoardError(code);

    expect(error).toBeInstanceOf(BoardError);
    expect(error.code).toBe(code);
  });
});
