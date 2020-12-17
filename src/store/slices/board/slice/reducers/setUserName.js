/**
 * Set user name reducer.
 *
 * @param {Object} state Current state.
 * @param {Object} action Received action.
 *
 * @returns {Object} New state.
 */
export default function setUserName(state, action) {
  if (!action.payload || typeof action.payload.name !== 'string') {
    return state;
  }

  let userExists = false;
  const updatedUsers = state.users.others.map((user) => {
    if (user.id === action.payload.id) {
      userExists = true;
      return { ...user, name : action.payload.name };
    }

    return user;
  });

  return userExists
    ? {
      ...state,
      users : {
        ...state.users,
        others : updatedUsers,
      },
    }
    : state;
}
