/**
 * Set board name reducer.
 *
 * @param {Object} state Current state.
 * @param {Object} action Received action.
 *
 * @returns {Object} New state.
 */
export default function setBoardName(state, action) {
  return (
    action.payload
      ? {
        ...state,
        boardName : action.payload,
      }
      : state
  );
}
