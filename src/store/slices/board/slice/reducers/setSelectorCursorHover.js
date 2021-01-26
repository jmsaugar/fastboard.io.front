/**
 * Set selector tool cursor hover reducer.
 *
 * @param {Object} state Current state.
 * @param {Object} action Received action.
 *
 * @returns {Object} New state.
 */
export default function setSelectorCursorHover(state, action) {
  return action.payload !== state.tools.selectorCursor.hover
    ? {
      ...state,
      tools : {
        ...state.tools,
        selectorCursor : {
          ...state.tools.selectorCursor,
          hover : action.payload,
        },
      },
    } : state;
}
