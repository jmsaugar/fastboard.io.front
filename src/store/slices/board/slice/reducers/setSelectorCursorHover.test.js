import setSelectorCursorHover from './setSelectorCursorHover';

const currentCursor = 3;
const newCursor = 5;

describe('Store : board : reducers : setSelectorCursorHover', () => {
  let state;

  beforeEach(() => {
    state = {
      tools : {
        selectorCursor : {
          hover : currentCursor,
        },
      },
    };
  });

  test('Correctly set selector cursor hover', () => {
    const newState = setSelectorCursorHover(state, { payload : newCursor });

    expect(newState.tools.selectorCursor.hover).toBe(newCursor);
  });

  test('Do not modify state if setting same cursor type', () => {
    const newState = setSelectorCursorHover(state, { payload : currentCursor });

    expect(newState).toBe(state);
  });
});
