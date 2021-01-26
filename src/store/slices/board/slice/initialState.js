import { defaultDrawingColor } from '#constants';

export default {
  joined    : false, // You joined the board
  owner     : undefined, // You own the board // @todo has to be reassigned when creator leaves
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
