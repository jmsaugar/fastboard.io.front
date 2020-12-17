import setCreated from './setCreated';

const boardData = {
  boardName : 'board name',
  userName  : 'user name',
};

describe('Store : board : reducers : setCreated', () => {
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
    const newState = setCreated(state, { payload : boardData });

    expect(newState).not.toBe(state);
    expect(newState.boardName).toBe(boardData.boardName);
    expect(newState.users.me).toBe(boardData.userName);
    expect(newState.joined).toBe(true);
    expect(newState.owner).toBe(true);
  });

  test('Do not modify state if no payload', () => {
    expect(setCreated(state, {})).toBe(state);
  });
});
