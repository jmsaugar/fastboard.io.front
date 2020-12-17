/**
 * Set board name reducer.
 *
 * @param {Object} state Current state.
 * @param {Object} action Received action.
 *
 * @returns {Object} New state.
 */
export default function setBoardName(state, action) {
  if (typeof action.payload !== 'string') {
    return state;
  }

  return {
    ...state,
    boardName : action.payload,
  };
}
