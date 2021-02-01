/**
 * Set my user name reducer.
 *
 * @param {Object} state Current state.
 * @param {Object} action Received action.
 *
 * @returns {Object} New state.
 */
export default function setMyUserName(state, action) {
  if (typeof action.payload !== 'string') {
    return state;
  }

  return {
    ...state,
    users : {
      ...state.users,
      me : {
        ...state.users.me,
        name : action.payload,
      },
    },
  };
}
