/**
 * Set my user name reducer.
 *
 * @param {Object} state Current state.
 * @param {Object} action Received action.
 *
 * @returns {Object} New state.
 */
export default function setMyUserName(state, action) {
  return (
    action.payload
      ? {
        ...state,
        users : {
          ...state.users,
          me : action.payload,
        },
      }
      : state
  );
}
