/**
 * Set text area item to visible with the given position.
 *
 * @param {Object} state Current state.
 * @param {Object} action Received action.
 *
 * @returns {Object} New state.
 */
export default function showTextAreaItem(state, action) {
  if (!action.payload || typeof action.payload.top !== 'number'
    || typeof action.payload.left !== 'number' || typeof action.payload.color !== 'string') {
    return state;
  }

  return {
    ...state,
    tools : {
      ...state.tools,
      textAreaItem : {
        show  : true,
        top   : action.payload.top,
        left  : action.payload.left,
        color : action.payload.color,
      },
    },
  };
}
