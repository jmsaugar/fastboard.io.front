import addNotification from './thunks';

const notificationContent = 'notification content';

global.setTimeout = jest.fn((callback) => callback());

describe('Store : notifications : thunks : addNotification', () => {
  test('Notification is correctly dispatched', () => {
    const dispatch = jest.fn();
    const notification = { content : notificationContent };

    const thunk = addNotification(notification);
    thunk(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });
});
