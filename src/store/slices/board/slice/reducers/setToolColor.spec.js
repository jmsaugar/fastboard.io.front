import setToolColor from './setToolColor';

import { drawingColors, tools } from '#constants';

const initialColor = drawingColors.black;

describe('Store : board : reducers : setToolColor', () => {
  let state;

  beforeEach(() => {
    state = {
      tools : {
        selected : tools.pencil,
        colors   : {
          pencil : initialColor,
          pen    : initialColor,
        },
      },
    };
  });

  test('Correctly select a tool', () => {
    const newState = setToolColor(state, {
      payload : {
        tool  : tools.pencil,
        color : drawingColors.red,
      },
    });

    expect(newState).not.toBe(state);
    expect(newState.tools.colors[tools.pencil]).toBe(drawingColors.red);
    expect(state.tools.colors[tools.pen]).toBe(initialColor);
  });

  test('Do not modify state if no payload', () => {
    expect(setToolColor(state, {})).toBe(state);
    expect(state.tools.colors[tools.pencil]).toBe(initialColor);
    expect(state.tools.colors[tools.pen]).toBe(initialColor);
  });
});
