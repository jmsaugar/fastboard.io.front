import { createSelector } from '@reduxjs/toolkit';

export const boardNameSelector = (state) => state.boardName;

const usersSelector = (state) => state.users;

export const userNameSelector = createSelector(
  usersSelector,
  (users) => users.me,
);

export const usersCountSelector = createSelector(
  usersSelector,
  (users) => users.others.length + 1,
);
