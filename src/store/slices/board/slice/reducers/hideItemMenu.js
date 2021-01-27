/**
 * Set item menu to hidden.
 *
 * @param {Object} state Current state.
 * @param {Object} action Received action.
 *
 * @returns {Object} New state.
 */
export default function hideItemMenu(state) {
  return {
    ...state,
    tools : {
      ...state.tools,
      itemMenu : {
        show : false,
        top  : undefined,
        left : undefined,
      },
    },
  };
}
