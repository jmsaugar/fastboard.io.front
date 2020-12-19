import { boardsMessages } from '#constants';

import setBoardName from './setBoardName';

const newBoardName = 'new board name';

describe('Service : boards : setBoardName', () => {
  let scope;

  beforeEach(() => {
    scope = {
      dependencies : {
        realtimeService : {
          send : jest.fn(),
        },
      },
    };
  });

  test('Correctly set board name', () => {
    setBoardName.call(scope, newBoardName);

    expect(scope.dependencies.realtimeService.send).toHaveBeenCalledTimes(1);
    expect(scope.dependencies.realtimeService.send).toHaveBeenCalledWith(
      boardsMessages.doSetBoardName,
      newBoardName,
    );
  });
});
