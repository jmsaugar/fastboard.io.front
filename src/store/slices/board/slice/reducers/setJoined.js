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
          me : {
            name     : action.payload.userName,
            joinDate : action.payload.joinDate,
          },
          others : action.payload.users,
        },
        tools : {
          selected       : undefined,
          selectorCursor : {
            operation : undefined,
            hover     : undefined,
          },
          itemMenu : {
            show : false,
            top  : undefined,
            left : undefined,
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
