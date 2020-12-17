import setUnjoined from './setUnjoined';

describe('Store : board : reducers : setUnjoined', () => {
  let state;

  beforeEach(() => {
    state = {
      joined    : true,
      owner     : true,
      boardName : 'board name',
      users     : {
        me     : 'my name',
        others : [{ id : 1 }],
      },
    };
  });

  test('Correctly set unjoined', () => {
    const newState = setUnjoined(state);

    expect(newState).not.toBe(state);
    expect(newState.joined).toBe(false);
    expect(newState.owner).toBeUndefined();
    expect(newState.boardName).toBeUndefined();
    expect(newState.users.me).toBeUndefined();
    expect(newState.users.others).toHaveLength(0);
  });
});
