/**
 * Set text area item to hidden.
 *
 * @param {Object} state Current state.
 * @param {Object} action Received action.
 *
 * @returns {Object} New state.
 */
export default function hideTextAreaItem(state) {
  return {
    ...state,
    tools : {
      ...state.tools,
      textAreaItem : {
        show  : false,
        top   : undefined,
        left  : undefined,
        color : undefined,
      },
    },
  };
}
