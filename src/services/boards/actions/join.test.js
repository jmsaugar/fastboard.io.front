import { boardsMessages, boardsErrors } from '#constants';
import { BoardError } from '#utils';

import join from './join';

const boardId = '123456';
const wrongBoardId = '987654';
const boardName = 'board name';
const userName = 'user name';
const joinDate = '2021-02-28T12:14:15.000Z';
const users = [
  { id : 1 },
  { id : 2 },
];

describe('Service : boards : join', () => {
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

  test('Correctly join board', () => {
    scope.dependencies.realtimeService.send = jest.fn(() => (Promise.resolve({
      boardId, boardName, users, joinDate,
    })));

    const promise = join.call(scope, boardId, userName);

    expect(scope.dependencies.realtimeService.send).toHaveBeenCalledTimes(1);
    expect(scope.dependencies.realtimeService.send).toHaveBeenCalledWith(
      boardsMessages.doJoin,
      { boardId, userName },
    );
    return expect(promise).resolves.toEqual({
      boardId, boardName, users, joinDate,
    });
  });

  test('Error in board joining - wrong board id', () => {
    scope.dependencies.realtimeService.send = jest.fn(() => (Promise.resolve({
      boardId : wrongBoardId, boardName, users,
    })));

    const promise = join.call(scope, boardId, userName);

    expect(scope.dependencies.realtimeService.send).toHaveBeenCalledTimes(1);
    return expect(promise).rejects.toThrow(new BoardError(boardsErrors.generic));
  });
});
