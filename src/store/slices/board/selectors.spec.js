import { tools, defaultDrawingColor } from '#constants';

import {
  isOwnerSelector,
  isJoinedSelector,
  boardNameSelector,
  myUserNameSelector,
  otherUsersSelector,
  usersCountSelector,
  selectedToolSelector,
  toolsColorsSelector,
} from './selectors';

const joined = true;
const owner = true;
const boardName = 'board name';
const me = 'my user name';
const others = [
  { id : 1 },
  { id : 2 },
];
const users = {
  me,
  others,
};
const selectedTool = tools.pencil;
const colors = {
  pencil : defaultDrawingColor,
};

describe('Store : board : selectors', () => {
  let state;

  beforeEach(() => {
    state = {
      board : {
        joined,
        owner,
        boardName,
        users,
        tools : {
          selected : selectedTool,
          colors,
        },
      },
    };
  });

  test('Is owner selector working correctly', () => {
    expect(isOwnerSelector(state)).toBe(owner);
  });

  test('Is joined selector working correctly', () => {
    expect(isJoinedSelector(state)).toBe(joined);
  });

  test('Board name selector working correctly', () => {
    expect(boardNameSelector(state)).toBe(boardName);
  });

  test('My user name selector working correctly', () => {
    expect(myUserNameSelector(state)).toBe(me);
  });

  test('Users selector working correctly', () => {
    expect(otherUsersSelector(state)).toBe(others);
  });

  test('Users count selector working correctly', () => {
    expect(usersCountSelector(state)).toBe(others.length + 1);
  });

  test('Selected tool selector working correctly', () => {
    expect(selectedToolSelector(state)).toBe(selectedTool);
  });

  test('Tools colors selector working correctly', () => {
    expect(toolsColorsSelector(state)).toBe(colors);
  });
});
