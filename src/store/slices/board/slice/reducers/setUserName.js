/**
 * Set user name reducer.
 *
 * @param {Object} state Current state.
 * @param {Object} action Received action.
 *
 * @returns {Object} New state.
 */
export default function setUserName(state, action) {
  return (
    action.payload
      ? {
        ...state,
        users : {
          ...state.users,
          others : state.users.others.map((user) => ({
            ...user,
            name : user.id === action.payload.id ? action.payload.name : user.name,
          })),
        },
      }
      : state
  );
}
