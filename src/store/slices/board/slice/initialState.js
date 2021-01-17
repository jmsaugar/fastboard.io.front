import { defaultDrawingColor } from '#constants';

export default {
  joined    : false,
  owner     : undefined,
  boardName : undefined,
  users     : {
    me     : undefined,
    others : [],
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
};
