import { boardsMessages, boardsErrors } from '#constants';
import { BoardError } from '#utils';

import create from './create';

const boardId = '123456';
const boardName = 'board name';
const userName = 'user name';
const joinDate = '2021-02-28T12:14:15.000Z';

describe('Service : boards : create', () => {
  let scope;

  beforeEach(() => {
    scope = {
      dependencies : {
        realtimeService : {
          setMessageHandlers : jest.fn(),
        },
      },
    };
  });

  test('Correctly create board', () => {
    scope.dependencies.realtimeService.send = jest.fn(() => (Promise.resolve({
      boardId, boardName, joinDate,
    })));

    const promise = create.call(scope, boardName, userName);

    expect(scope.dependencies.realtimeService.send).toHaveBeenCalledTimes(1);
    expect(scope.dependencies.realtimeService.send).toHaveBeenCalledWith(
      boardsMessages.doCreate,
      { boardName, userName },
    );
    return expect(promise).resolves.toEqual({ boardId, boardName, joinDate });
  });

  test('Error in board creation - wrong board id', () => {
    scope.dependencies.realtimeService.send = jest.fn(() => (Promise.resolve({
      boardId : undefined, boardName,
    })));

    const promise = create.call(scope, boardName, userName);

    expect(scope.dependencies.realtimeService.send).toHaveBeenCalledTimes(1);
    return expect(promise).rejects.toThrow(new BoardError(boardsErrors.generic));
  });
});
