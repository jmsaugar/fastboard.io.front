import setMyUserName from './setMyUserName';

const initialName = 'initial name';

describe('Store : board : reducers : setMyUserName', () => {
  let state;

  beforeEach(() => {
    state = {
      users : {
        me : initialName,
      },
    };
  });

  test('Correctly change my user name', () => {
    const newName = 'new name';
    const newState = setMyUserName(state, { payload : newName });

    expect(newState).not.toBe(state);
    expect(newState.users.me).toBe(newName);
  });

  test('Do not modify state if my user name not a string', () => {
    expect(setMyUserName(state, 123)).toBe(state);
    expect(state.users.me).toBe(initialName);
  });
});
