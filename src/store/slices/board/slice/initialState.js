import { defaultDrawingColor } from '#constants';

export default {
  joined    : false, // You joined the board
  boardName : undefined,
  users     : {
    me : {
      name     : undefined,
      joinDate : undefined,
    },
    others : [], // User === { id, name, joinDate }
  },
  tools : {
    selected       : undefined, // Currently selected tool
    selectorCursor : {
      operation : undefined, // Selector cursor based on current operation
      hover     : undefined, // Selector cursor based on current hover position
    },
    itemMenu : {
      show : false,
      top  : undefined,
      left : undefined,
    },
    textAreaItem : {
      show  : false,
      top   : undefined,
      left  : undefined,
      color : undefined,
    },
    colors : {
      pencil      : defaultDrawingColor,
      pen         : defaultDrawingColor,
      highlighter : defaultDrawingColor,
      text        : defaultDrawingColor,
    },
  },
  map : {
    isDragging : false, // The map viewport is being dragged
  },
};
