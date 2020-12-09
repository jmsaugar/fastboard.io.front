import { drawingsService } from '#services';

import {
  addUser as addUserAction,
  removeUser as removeUserAction,
  setJoined as setJoinedAction,
} from './slice';

/**
 * Add the user to the drawings service
 * and dispatch the add user action.
 *
 * @param {Object} user User data payload.
 */
export const addUser = (user) => (dispatch) => {
  drawingsService.addUser(user.id);
  dispatch(addUserAction(user));
};

/**
 * Remove the user from the drawings service
 * and dispatch the remove user action.
 *
 * @param {Object} user User data payload.
 */
export const removeUser = (user) => (dispatch) => {
  drawingsService.removeUser(user.id);
  dispatch(removeUserAction(user));
};

/**
 * Add the users to the drawings service (if passed)
 * and dispatch the set joined action.
 *
 * @param {Object} payload Join board data payload.
 */
export const setJoined = (payload) => (dispatch) => {
  if (payload.users) {
    payload.users.map(({ id }) => drawingsService.addUser(id));
  }

  dispatch(setJoinedAction(payload));
};
