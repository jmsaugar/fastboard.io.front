import { drawingsService } from '#services';

import {
  setUsers as setUsersAction,
  addUser as addUserAction,
  removeUser as removeUserAction,
} from './slice';

const addUser = (user) => (dispatch) => {
  drawingsService.addUser(user.id);
  dispatch(addUserAction(user));
};

const setUsers = (users) => (dispatch) => {
  users.map(({ id }) => drawingsService.addUser(id));
  dispatch(setUsersAction(users));
};

const removeUser = (user) => (dispatch) => {
  drawingsService.removeUser(user.id);
  dispatch(removeUserAction(user));
};

export {
  addUser,
  setUsers,
  removeUser,
};
