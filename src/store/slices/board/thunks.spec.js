import { drawingsService } from '#services';

import {
  addUser,
  removeUser,
  setJoined,
} from './thunks';

jest.mock('#services', () => ({
  drawingsService : {
    addUser    : jest.fn(),
    removeUser : jest.fn(),
  },
}));

beforeEach(() => {
  drawingsService.addUser.mockClear();
  drawingsService.removeUser.mockClear();
});

describe('Store : board : thunks : addUser', () => {
  test('User addition correctly dispatched', () => {
    const dispatch = jest.fn();
    const user = { id : 1, name : 'user name' };

    const thunk = addUser(user);
    thunk(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(drawingsService.addUser).toHaveBeenCalledTimes(1);
    expect(drawingsService.addUser).toHaveBeenCalledWith(user.id);
  });
});

describe('Store : board : thunks : removeUser', () => {
  test('User removal correctly dispatched', () => {
    const dispatch = jest.fn();
    const user = { id : 1, name : 'user name' };

    const thunk = removeUser(user);
    thunk(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(drawingsService.removeUser).toHaveBeenCalledTimes(1);
    expect(drawingsService.removeUser).toHaveBeenCalledWith(user.id);
  });
});

describe('Store : board : thunks : setJoined', () => {
  test('Set joined without users correctly dispatched', () => {
    const dispatch = jest.fn();
    const payload = {};

    const thunk = setJoined(payload);
    thunk(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(drawingsService.addUser).toHaveBeenCalledTimes(0);
  });

  test('Set joined with users correctly dispatched', () => {
    const dispatch = jest.fn();
    const payload = {
      users : [
        { id : 1 },
        { id : 2 },
      ],
    };

    const thunk = setJoined(payload);
    thunk(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(drawingsService.addUser).toHaveBeenCalledTimes(2);
  });
});
