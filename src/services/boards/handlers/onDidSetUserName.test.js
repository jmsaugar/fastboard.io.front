import store, { setUserName, addNotification } from '#store';

import onDidSetUserName from './onDidSetUserName';

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
    setUserName        : jest.fn(),
    addNotification    : jest.fn(),
    otherUsersSelector : jest.fn(() => [{ id : mockUserId, name : mockUserName }]),
  }),
);

describe('Service : boards : onDidSetUserName', () => {
  beforeEach(() => {
    store.dispatch.mockClear();
    setUserName.mockClear();
    addNotification.mockClear();
  });

  test('Correctly handle board name change', () => {
    onDidSetUserName({ userId : mockUserId, userName : mockUserName }); // No scope

    expect(store.dispatch).toHaveBeenCalledTimes(2);
    expect(setUserName).toHaveBeenCalledTimes(1);
    expect(addNotification).toHaveBeenCalledTimes(1);
  });
});
