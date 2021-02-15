import hideItemMenu from './hideItemMenu';

describe('Store : board : reducers : hideItemMenu', () => {
  let state;

  beforeEach(() => {
    state = {
      tools : {
        itemMenu : {
          show : true,
          top  : 10,
          left : 20,
        },
      },
    };
  });

  test('Correctly hide item menu', () => {
    const newState = hideItemMenu(state);

    expect(newState).not.toBe(state);
    expect(newState.tools.itemMenu.show).toBe(false);
    expect(newState.tools.itemMenu.top).toBeUndefined();
    expect(newState.tools.itemMenu.left).toBeUndefined();
  });
});
