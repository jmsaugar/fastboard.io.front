import setJoined from './setJoined';

const boardData = {
  boardName : 'board name',
  userName  : 'user name',
  users     : [{ id : 1 }],
};

describe('Store : board : reducers : setJoined', () => {
  let state;

  beforeEach(() => {
    state = {
      joined    : false,
      owner     : undefined,
      boardName : undefined,
      users     : {
        me     : undefined,
        others : [],
      },
    };
  });

  test('Correctly set created board', () => {
    const newState = setJoined(state, { payload : boardData });

    expect(newState).not.toBe(state);
    expect(newState.boardName).toBe(boardData.boardName);
    expect(newState.users.me).toBe(boardData.userName);
    expect(newState.joined).toBe(true);
    expect(newState.owner).toBe(false);
    expect(newState.users.others).toHaveLength(1);
    expect(newState.users.others[0].id).toBe(boardData.users[0].id);
  });

  test('Do not modify state if no payload', () => {
    expect(setJoined(state, {})).toBe(state);
  });
});
