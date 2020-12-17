/**
 * Remove user reducer.
 *
 * @param {Object} state Current state.
 * @param {Object} action Received action.
 *
 * @returns {Object} New state.
 */
export default function removeUser(state, action) {
  if (!state.users.others.length) {
    return state;
  }

  const newUsersList = state.users.others.filter(({ id }) => action.payload !== id);

  if (newUsersList.length === state.users.others.length) {
    return state;
  }

  return {
    ...state,
    users : {
      ...state.users,
      others : newUsersList,
    },
  };
}
