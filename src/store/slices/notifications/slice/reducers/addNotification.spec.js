import addNotification from './addNotification';

const notificationId = 1;

describe('addNotification', () => {
  let state;

  beforeEach(() => {
    state = [];
  });

  test('Correctly add notifications', () => {
    const notification = { payload : { id : notificationId } };
    let newState = addNotification(state, notification);

    expect(newState).not.toBe(state);
    expect(newState).toHaveLength(1);
    expect(newState[0].id).toBe(notificationId);

    newState = addNotification(newState, notification);
    expect(newState).toHaveLength(2);
  });

  test('Do not modify state if no payload', () => {
    expect(addNotification(state, {})).toBe(state);
    expect(state).toHaveLength(0);
  });
});
