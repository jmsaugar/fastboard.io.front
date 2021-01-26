/**
 * Set selector tool cursor operation reducer.
 *
 * @param {Object} state Current state.
 * @param {Object} action Received action.
 *
 * @returns {Object} New state.
 */
export default function setSelectorCursorOperation(state, action) {
  return action.payload !== state.tools.selectorCursor.operation
    ? {
      ...state,
      tools : {
        ...state.tools,
        selectorCursor : {
          ...state.tools.selectorCursor,
          operation : action.payload,
        },
      },
    } : state;
}
