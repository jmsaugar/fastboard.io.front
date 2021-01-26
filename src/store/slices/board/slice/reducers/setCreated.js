import { defaultDrawingColor } from '#constants';

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
          me : {
            name     : action.payload.userName,
            joinDate : action.payload.joinDate,
          },
          others : [],
        },
        tools : {
          selected       : undefined,
          selectorCursor : {
            operation : undefined,
            hover     : undefined,
          },
          colors : {
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
