/**
 * Set board created reducer.
 *
 * @param {Object} state Current state.
 * @param {Object} action Received action.
 *
 * @returns {Object} New state.
 */
export default function setCreated(state, action) {
  return (
    action.payload
      ? {
        ...state,
        joined    : true,
        owner     : true,
        boardName : action.payload.boardName,
        users     : {
          me     : action.payload.userName,
          others : [],
        },
      }
      : state
  );
}
