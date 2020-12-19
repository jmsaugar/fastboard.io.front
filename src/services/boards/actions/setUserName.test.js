import { boardsMessages } from '#constants';

import setUserName from './setUserName';

const newUserName = 'new user name';

describe('Service : boards : setUserName', () => {
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

  test('Correctly set user name', () => {
    setUserName.call(scope, newUserName);

    expect(scope.dependencies.realtimeService.send).toHaveBeenCalledTimes(1);
    expect(scope.dependencies.realtimeService.send).toHaveBeenCalledWith(
      boardsMessages.doSetUserName,
      newUserName,
    );
  });
});
