import store, { addUser, addNotification } from '#store';

import onDidJoin from './onDidJoin';

const userId = '123';
const userName = 'user name';

jest.mock(
  '#store',
  () => ({
    __esModule : true,
    default    : {
      dispatch : jest.fn(),
    },
    addUser         : jest.fn(),
    addNotification : jest.fn(),
  }),
);

describe('Service : boards : onDidJoin', () => {
  beforeEach(() => {
    store.dispatch.mockClear();
    addUser.mockClear();
    addNotification.mockClear();
  });

  test('Correctly handle user join', () => {
    onDidJoin({ userId, userName }); // No scope

    expect(store.dispatch).toHaveBeenCalledTimes(2);
    expect(addUser).toHaveBeenCalledTimes(1);
    expect(addNotification).toHaveBeenCalledTimes(1);
  });
});
