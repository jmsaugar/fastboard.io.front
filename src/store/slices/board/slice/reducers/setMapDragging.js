/**
 * Set map dragging state reducer.
 *
 * @param {Object} state Current state.
 * @param {Object} action Received action.
 *
 * @returns {Object} New state.
 */
export default function setMapDragging(state, action) {
  if (typeof action.payload !== 'boolean') {
    return state;
  }

  return {
    ...state,
    map : {
      isDragging : action.payload,
    },
  };
}
