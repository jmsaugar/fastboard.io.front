import store, { removeUser, addNotification } from '#store';

import onDidLeave from './onDidLeave';

const mockUserId = '123';
const mockUserName = 'user name';

jest.mock(
  '#store',
  () => ({
    __esModule : true,
    default    : {
      dispatch : jest.fn(),
      getState : jest.fn(() => ({
        users : {
          others : [
            { id : mockUserId },
          ],
        },
      })),
    },
    removeUser         : jest.fn(),
    addNotification    : jest.fn(),
    otherUsersSelector : jest.fn(() => [{ id : mockUserId, name : mockUserName }]),
  }),
);

describe('Service : boards : onDidLeave', () => {
  beforeEach(() => {
    store.dispatch.mockClear();
    removeUser.mockClear();
    addNotification.mockClear();
  });

  test('Correctly handle user leave', () => {
    onDidLeave({ userId : mockUserId }); // No scope

    expect(store.dispatch).toHaveBeenCalledTimes(2);
    expect(removeUser).toHaveBeenCalledTimes(1);
    expect(addNotification).toHaveBeenCalledTimes(1);
  });
});
