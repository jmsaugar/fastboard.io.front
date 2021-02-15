import showTextAreaItem from './showTextAreaItem';

const top = 10;
const left = 20;
const color = '#123456';

describe('Store : board : reducers : showTextAreaItem', () => {
  let state;

  beforeEach(() => {
    state = {
      tools : {
        textAreaItem : {
          show : false,
          top,
          left,
          color,
        },
      },
    };
  });

  test('Correctly show text area item', () => {
    const newState = showTextAreaItem(state, { payload : { top, left, color } });

    expect(newState).not.toBe(state);
    expect(newState.tools.textAreaItem.show).toBe(true);
    expect(newState.tools.textAreaItem.top).toBe(top);
    expect(newState.tools.textAreaItem.left).toBe(left);
    expect(newState.tools.textAreaItem.color).toBe(color);
  });

  test('Do not modify state if no payload', () => {
    expect(showTextAreaItem(state, {})).toBe(state);
  });
});
