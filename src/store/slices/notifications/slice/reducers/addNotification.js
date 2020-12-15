/**
 * Add notification reducer.
 *
 * @param {Object} state Current state.
 * @param {Object} action Received action.
 *
 * @returns {Object} New state.
 */
export default function addNotification(state, action) {
  return (
    action.payload
      ? [...state, action.payload]
      : state
  );
}
