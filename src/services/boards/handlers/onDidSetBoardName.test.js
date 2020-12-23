import store, { setBoardName, addNotification } from '#store';

import onDidSetBoardName from './onDidSetBoardName';

const boardId = '123';
const boardName = 'board name';

jest.mock(
  '#store',
  () => ({
    __esModule : true,
    default    : {
      dispatch : jest.fn(),
    },
    setBoardName    : jest.fn(),
    addNotification : jest.fn(),
  }),
);

describe('Service : boards : onDidSetBoardName', () => {
  beforeEach(() => {
    store.dispatch.mockClear();
    setBoardName.mockClear();
    addNotification.mockClear();
  });

  test('Correctly handle board name change', () => {
    onDidSetBoardName({ boardId, boardName }); // No scope

    expect(store.dispatch).toHaveBeenCalledTimes(2);
    expect(setBoardName).toHaveBeenCalledTimes(1);
    expect(addNotification).toHaveBeenCalledTimes(1);
  });
});
