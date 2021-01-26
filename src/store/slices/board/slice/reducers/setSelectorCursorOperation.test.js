import setSelectorCursorOperation from './setSelectorCursorOperation';

const currentCursor = 3;
const newCursor = 5;

describe('Store : board : reducers : setSelectorCursorOperation', () => {
  let state;

  beforeEach(() => {
    state = {
      tools : {
        selectorCursor : {
          operation : currentCursor,
        },
      },
    };
  });

  test('Correctly set selector cursor hover', () => {
    const newState = setSelectorCursorOperation(state, { payload : newCursor });

    expect(newState.tools.selectorCursor.operation).toBe(newCursor);
  });

  test('Do not modify state if setting same cursor type', () => {
    const newState = setSelectorCursorOperation(state, { payload : currentCursor });

    expect(newState).toBe(state);
  });
});
