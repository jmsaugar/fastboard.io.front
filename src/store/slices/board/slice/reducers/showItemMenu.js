/**
 * Set item menu to visible with the given position.
 *
 * @param {Object} state Current state.
 * @param {Object} action Received action.
 *
 * @returns {Object} New state.
 */
export default function showItemMenu(state, action) {
  if (!action.payload || typeof action.payload.top !== 'number' || typeof action.payload.left !== 'number') {
    return state;
  }

  return {
    ...state,
    tools : {
      ...state.tools,
      itemMenu : {
        show : true,
        top  : action.payload.top,
        left : action.payload.left,
      },
    },
  };
}
