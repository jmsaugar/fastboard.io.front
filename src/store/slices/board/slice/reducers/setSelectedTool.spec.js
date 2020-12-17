import setSelectedTool from './setSelectedTool';

import { tools } from '#constants';

const initialTool = tools.pencil;

describe('Store : board : reducers : setSelectedTool', () => {
  let state;

  beforeEach(() => {
    state = {
      tools : {
        selected : initialTool,
      },
    };
  });

  test('Correctly select a tool', () => {
    const newState = setSelectedTool(state, { payload : tools.eraser });

    expect(newState).not.toBe(state);
    expect(newState.tools.selected).toBe(tools.eraser);
  });

  test('Do not modify state if no payload', () => {
    expect(setSelectedTool(state, {})).toBe(state);
    expect(state.tools.selected).toBe(initialTool);
  });
});
