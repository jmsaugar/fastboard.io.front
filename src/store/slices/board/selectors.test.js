import { tools, defaultDrawingColor } from '#constants';

import {
  isOwnerSelector,
  isJoinedSelector,
  boardNameSelector,
  myUserNameSelector,
  myJoinDateSelector,
  otherUsersSelector,
  usersCountSelector,
  selectedToolSelector,
  toolsColorsSelector,
  isDraggingMapSelector,
} from './selectors';

const joined = true;
const owner = true;
const boardName = 'board name';
const me = {
  name     : 'my user name',
  joinDate : '2021-02-28T12:14:15.000Z',
};
const others = [
  { id : 1, joinDate : '2021-02-28T12:24:15.000Z' },
  { id : 2, joinDate : '2021-02-28T12:34:15.000Z' },
];
const users = { me, others };
const selectedTool = tools.pencil;
const colors = { pencil : defaultDrawingColor };
const isDraggingMap = true;

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
        map : {
          isDragging : isDraggingMap,
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
    expect(myUserNameSelector(state)).toBe(me.name);
  });

  test('My join date selector working correctly', () => {
    expect(myJoinDateSelector(state)).toBe(me.joinDate);
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

  test('Is dragging map selector working correctly', () => {
    expect(isDraggingMapSelector(state)).toBe(isDraggingMap);
  });
});
