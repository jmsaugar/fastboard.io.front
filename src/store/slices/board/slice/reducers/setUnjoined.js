/**
 * Set unjoined reducer.
 *
 * @param {Object} state Current state.
 *
 * @returns {Object} New state.
 */
export default function setUnjoined(state) {
  return {
    ...state,
    joined    : false,
    owner     : undefined,
    boardName : undefined,
    users     : {
      me     : undefined,
      others : [],
    },
  };
}
