import addNotification from './addNotification';

const notifications = [
  { id : 1 },
  { id : 2 },
];

describe('Store : notifications : reducers : addNotification', () => {
  let state;

  beforeEach(() => {
    state = [];
  });

  test('Correctly add notifications', () => {
    let newState = addNotification(state, { payload : notifications[0] });

    expect(newState).not.toBe(state);
    expect(newState).toHaveLength(1);
    expect(newState[0].id).toBe(notifications[0].id);

    newState = addNotification(newState, { payload : notifications[1] });
    expect(newState).toHaveLength(2);
  });

  test('Do not modify state if no payload', () => {
    expect(addNotification(state, {})).toBe(state);
    expect(state).toHaveLength(0);
  });
});
