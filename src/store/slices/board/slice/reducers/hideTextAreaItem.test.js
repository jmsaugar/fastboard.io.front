import hideTextAreaItem from './hideTextAreaItem';

describe('Store : board : reducers : hideTextAreaItem', () => {
  let state;

  beforeEach(() => {
    state = {
      tools : {
        textAreaItem : {
          show  : true,
          top   : 10,
          left  : 20,
          color : '#123456',
        },
      },
    };
  });

  test('Correctly hide text area item', () => {
    const newState = hideTextAreaItem(state);

    expect(newState).not.toBe(state);
    expect(newState.tools.textAreaItem.show).toBe(false);
    expect(newState.tools.textAreaItem.top).toBeUndefined();
    expect(newState.tools.textAreaItem.left).toBeUndefined();
    expect(newState.tools.textAreaItem.color).toBeUndefined();
  });
});
