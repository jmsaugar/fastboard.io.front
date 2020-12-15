/**
 * Set selected tool reducer.
 *
 * @param {Object} state Current state.
 * @param {Object} action Received action.
 *
 * @returns {Object} New state.
 */
export default function setSelectedTool(state, action) {
  return (
    action.payload
      ? {
        ...state,
        tools : {
          ...state.tools,
          selected : action.payload,
        },
      } : state
  );
}
