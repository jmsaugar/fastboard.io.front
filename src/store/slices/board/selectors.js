import { createSelector } from '@reduxjs/toolkit';

const boardSelector = (state) => state.board;

export const isOwnerSelector = createSelector(
  boardSelector,
  (board) => board.owner,
);

export const isJoinedSelector = createSelector(
  boardSelector,
  (board) => board.joined,
);

export const boardNameSelector = createSelector(
  boardSelector,
  (board) => board.boardName,
);

const usersSelector = createSelector(
  boardSelector,
  (board) => board.users,
);

const meSelector = createSelector(
  usersSelector,
  (users) => users.me,
);

export const myUserNameSelector = createSelector(
  meSelector,
  (me) => me.name,
);

export const myJoinDateSelector = createSelector(
  meSelector,
  (me) => me.joinDate,
);

export const otherUsersSelector = createSelector(
  usersSelector,
  (users) => users.others,
);

export const usersCountSelector = createSelector(
  usersSelector,
  (users) => users.others.length + 1,
);

const toolsSelector = createSelector(
  boardSelector,
  (board) => board.tools,
);

export const selectedToolSelector = createSelector(
  toolsSelector,
  (tools) => tools.selected,
);

const selectorCursorSliceSelector = createSelector(
  toolsSelector,
  (tools) => tools.selectorCursor,
);

export const selectorCursorSelector = createSelector(
  selectorCursorSliceSelector,
  (selectorCursor) => (selectorCursor.operation || selectorCursor.hover),
);

export const itemMenuSelector = createSelector(
  toolsSelector,
  (tools) => tools.itemMenu,
);

export const toolsColorsSelector = createSelector(
  toolsSelector,
  (tools) => tools.colors,
);

const mapSelector = createSelector(
  boardSelector,
  (board) => board.map,
);

export const isDraggingMapSelector = createSelector(
  mapSelector,
  (map) => map.isDragging,
);
