import setBoardName from './setBoardName';

const initialName = 'initial name';

describe('Store : board : reducers : setBoardName', () => {
  let state;

  beforeEach(() => {
    state = {
      boardName : initialName,
    };
  });

  test('Correctly change board name', () => {
    const newName = 'new name';
    const newState = setBoardName(state, { payload : newName });

    expect(newState).not.toBe(state);
    expect(newState.boardName).toBe(newName);
  });

  test('Do not modify state if name not a string', () => {
    expect(setBoardName(state, 123)).toBe(state);
    expect(state.boardName).toBe(initialName);
  });
});
