import setUnjoined from './setUnjoined';

describe('Store : board : reducers : setUnjoined', () => {
  let state;

  beforeEach(() => {
    state = {
      joined    : true,
      owner     : true,
      boardName : 'board name',
      users     : {
        me : {
          name     : 'my user name',
          joinDate : '2021-02-28T12:14:15.000Z',
        },
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
    expect(newState.users.me.name).toBeUndefined();
    expect(newState.users.me.joinDate).toBeUndefined();
    expect(newState.users.others).toHaveLength(0);
  });
});
