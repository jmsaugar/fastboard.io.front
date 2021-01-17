import setMapDragging from './setMapDragging';

describe('Store : board : reducers : setMapDragging', () => {
  let state;

  beforeEach(() => {
    state = {
      map : {
        isDragging : false,
      },
    };
  });

  test('Correctly set map dragging status', () => {
    let newState = setMapDragging(state, { payload : true });
    expect(newState.map.isDragging).toBe(true);

    newState = setMapDragging(state, { payload : false });
    expect(newState.map.isDragging).toBe(false);
  });

  test('Do not modify state if dragging flag is not a boolean', () => {
    expect(setMapDragging(state, { payload : 1 })).toBe(state);
    expect(state.map.isDragging).toBe(false);
  });
});
