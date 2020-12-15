/**
 * Remove notification reducer.
 *
 * @param {Object} state Current state.
 * @param {Object} action Received action.
 *
 * @returns {Object} New state.
 */
export default function removeNotification(state, action) {
  if (!state.length) {
    return state;
  }

  const newState = state.filter(({ id }) => id !== action.payload);

  return newState.length !== state.length ? newState : state;
}
