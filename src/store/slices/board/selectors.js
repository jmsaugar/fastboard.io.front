import { createSelector } from '@reduxjs/toolkit';

const boardSelector = (state) => state.board;

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

export const myUserNameSelector = createSelector(
  usersSelector,
  (users) => users.me,
);

export const otherUsersSelector = createSelector(
  usersSelector,
  (users) => users.others,
);

export const usersCountSelector = createSelector(
  usersSelector,
  (users) => users.others.length + 1,
);
