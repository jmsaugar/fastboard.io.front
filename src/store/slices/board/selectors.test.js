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
  selectorCursorSelector,
  textAreaItemSelector,
  itemMenuSelector,
  toolsColorsSelector,
  isDraggingMapSelector,
} from './selectors';

const joined = true;
const boardName = 'board name';
const me = {
  name     : 'my user name',
  joinDate : '2021-02-28T12:30:15.000Z',
};
const others = [
  { id : 1, joinDate : '2021-02-28T12:24:15.000Z' },
  { id : 2, joinDate : '2021-02-28T12:34:15.000Z' },
];
const users = { me, others };
const selectedTool = tools.pencil;
const selectorCursor = {
  operation : false,
  hover     : true,
};
const itemMenu = {
  show : true,
  top  : 10,
  left : 20,
};
const textAreaItem = {
  show  : true,
  top   : 30,
  left  : 40,
  color : '#123456',
};
const colors = { pencil : defaultDrawingColor };
const isDraggingMap = true;

describe('Store : board : selectors', () => {
  let state;

  beforeEach(() => {
    state = {
      board : {
        joined,
        boardName,
        users,
        tools : {
          selected : selectedTool,
          selectorCursor,
          colors,
          itemMenu,
          textAreaItem,
        },
        map : {
          isDragging : isDraggingMap,
        },
      },
    };
  });

  test('Is owner selector working correctly', () => {
    expect(isOwnerSelector(state)).toBe(false);
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

  test('Selector cursor selector working correctly', () => {
    expect(selectorCursorSelector(state)).toBe(selectorCursor.operation || selectorCursor.hover);
  });

  test('Text area item selector working correctly', () => {
    expect(textAreaItemSelector(state)).toBe(textAreaItem);
  });

  test('Item menu selector working correctly', () => {
    expect(itemMenuSelector(state)).toBe(itemMenu);
  });
});
