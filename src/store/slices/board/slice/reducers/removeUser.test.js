import removeUser from './removeUser';

const userId = 1;

describe('Store : board : reducers : removeUser', () => {
  let state;

  beforeEach(() => {
    state = {
      users : {
        others : [{ id : userId }],
      },
    };
  });

  test('Correctly remove users', () => {
    const newState = removeUser(state, { payload : userId });

    expect(newState).not.toBe(state);
    expect(newState.users.others).toHaveLength(0);
  });

  test('Do not modify state if user not found', () => {
    expect(removeUser(state, { payload : 2 })).toBe(state);
    expect(state.users.others).toHaveLength(1);
  });
});
