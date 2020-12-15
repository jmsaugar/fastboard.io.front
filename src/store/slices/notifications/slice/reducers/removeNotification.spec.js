import removeNotification from './removeNotification';

const notificationId = 1;

describe('removeNotification', () => {
  let state;

  beforeEach(() => {
    state = [{ id : notificationId }];
  });

  test('Correctly remove notifications', () => {
    const newState = removeNotification(state, { payload : notificationId });

    expect(newState).not.toBe(state);
    expect(newState).toHaveLength(0);
  });

  test('Do not modify state if notification not found', () => {
    expect(removeNotification(state, { payload : 2 })).toBe(state);
    expect(state).toHaveLength(1);
  });

  test('Do not modify state if no payload', () => {
    expect(removeNotification(state, {})).toBe(state);
    expect(state).toHaveLength(1);
  });
});
