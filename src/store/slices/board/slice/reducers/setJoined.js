import { defaultDrawingColor } from '#constants';

/**
 * Set board joined reducer.
 *
 * @param {Object} state Current state.
 * @param {Object} action Received action.
 *
 * @returns {Object} New state.
 */
export default function setJoined(state, action) {
  return (
    action.payload
      ? {
        ...state,
        joined    : true,
        owner     : false,
        boardName : action.payload.boardName,
        users     : {
          me     : action.payload.userName,
          others : action.payload.users,
        },
        tools : {
          selected : undefined,
          colors   : {
            pencil      : defaultDrawingColor,
            pen         : defaultDrawingColor,
            highlighter : defaultDrawingColor,
            text        : defaultDrawingColor,
          },
        },
        map : {
          isDragging : false,
        },
      }
      : state
  );
}
