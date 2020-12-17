import { setUserNameReducer } from '.';
import setUserName from './setUserName';

const newUserName = 'new user name';

describe('Store : board : reducers : setUserName', () => {
  let state;

  beforeEach(() => {
    state = {
      users : {
        others : [
          { id : 1, name : 'user1' },
          { id : 2, name : 'user2' },
          { id : 3, name : 'user3' },
        ],
      },
    };
  });

  test('Correctly set a user name', () => {
    const newState = setUserName(state, { payload : { id : 2, name : newUserName } });

    expect(newState).not.toBe(state);
    expect(newState.users.others.find(({ id }) => id === 2)?.name).toBe(newUserName);
  });

  test('Do not modify state if user does not exist', () => {
    const newState = setUserName(state, { payload : { id : 999, name : newUserName } });
    expect(newState).toBe(state);
  });

  test('Do not modify state if no payload or name not a string', () => {
    expect(setUserName(state, {})).toBe(state);
    expect(setUserName(state, { payload : { id : 1, name : 123 } })).toBe(state);
  });
});
