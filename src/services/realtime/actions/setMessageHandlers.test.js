import setMessageHandlers from './setMessageHandlers';

const dependencies = {
  boardsService : {
    onDidJoin         : jest.fn(),
    onDidLeave        : jest.fn(),
    onDidSetUserName  : jest.fn(),
    onDidSetBoardName : jest.fn(),
  },
  drawingsService : {
    onMouseDown    : jest.fn(),
    onMouseDrag    : jest.fn(),
    onMouseUp      : jest.fn(),
    onKeyDown      : jest.fn(),
    onImageAdded   : jest.fn(),
    onBoardCleared : jest.fn(),
  },
};

describe('Service : realtime : setMessageHandlers', () => {
  let scope;

  beforeEach(() => {
    scope = {
      dependencies,
      socket : {
        on : jest.fn(),
      },
    };
  });

  test('Message handlers correctly set', () => {
    setMessageHandlers.call(scope);

    expect(scope.socket.on).toHaveBeenCalledTimes(13);
  });
});
