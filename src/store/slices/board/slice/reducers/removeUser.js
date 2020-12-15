/**
 * Remove user reducer.
 *
 * @param {Object} state Current state.
 * @param {Object} action Received action.
 *
 * @returns {Object} New state.
 */
export default function removeUser(state, action) {
  return (
    action.payload
      ? {
        ...state,
        users : {
          ...state.users,
          others : state.users.others.filter(({ id }) => action.payload.id !== id),
        },
      }
      : state
  );
}
