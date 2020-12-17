import addUser from './addUser';

const users = [
  { id : 1 },
  { id : 2 },
];

describe('Store : board : reducers : addUser', () => {
  let state;

  beforeEach(() => {
    state = {
      users : {
        others : [],
      },
    };
  });

  test('Correctly add users', () => {
    let newState = addUser(state, { payload : users[0] });

    expect(newState).not.toBe(state);
    expect(newState.users.others).toHaveLength(1);
    expect(newState.users.others[0].id).toBe(users[0].id);

    newState = addUser(newState, { payload : users[1] });
    expect(newState.users.others).toHaveLength(2);
  });

  test('Do not modify state if no payload', () => {
    expect(addUser(state, {})).toBe(state);
    expect(state.users.others).toHaveLength(0);
  });
});
