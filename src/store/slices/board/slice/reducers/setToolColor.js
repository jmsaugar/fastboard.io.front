/**
 * Set tool color reducer.
 *
 * @param {Object} state Current state.
 * @param {Object} action Received action.
 *
 * @returns {Object} New state.
 */
export default function setToolColor(state, action) {
  return (
    action.payload
      ? {
        ...state,
        tools : {
          ...state.tools,
          colors : {
            ...state.tools.colors,
            [action.payload.tool] : action.payload.color,
          },
        },
      } : state
  );
}
