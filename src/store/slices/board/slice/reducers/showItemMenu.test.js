import showItemMenu from './showItemMenu';

const top = 10;
const left = 20;

describe('Store : board : reducers : showItemMenu', () => {
  let state;

  beforeEach(() => {
    state = {
      tools : {
        itemMenu : {
          show : false,
          top,
          left,
        },
      },
    };
  });

  test('Correctly show item menu', () => {
    const newState = showItemMenu(state, { payload : { top, left } });

    expect(newState).not.toBe(state);
    expect(newState.tools.itemMenu.show).toBe(true);
    expect(newState.tools.itemMenu.top).toBe(top);
    expect(newState.tools.itemMenu.left).toBe(left);
  });

  test('Do not modify state if no payload', () => {
    expect(showItemMenu(state, {})).toBe(state);
  });
});
