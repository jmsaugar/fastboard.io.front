import setMyUserName from './setMyUserName';

const initialName = 'initial name';
const myJoinDate = '2021-02-28T12:14:15.000Z';

describe('Store : board : reducers : setMyUserName', () => {
  let state;

  beforeEach(() => {
    state = {
      users : {
        me : {
          name     : initialName,
          joinDate : myJoinDate,
        },
      },
    };
  });

  test('Correctly change my user name', () => {
    const newName = 'new name';
    const newState = setMyUserName(state, { payload : newName });

    expect(newState).not.toBe(state);
    expect(newState.users.me.name).toBe(newName);
    expect(newState.users.me.joinDate).toBe(myJoinDate);
  });

  test('Do not modify state if my user name not a string', () => {
    expect(setMyUserName(state, 123)).toBe(state);
    expect(state.users.me.name).toBe(initialName);
  });
});
