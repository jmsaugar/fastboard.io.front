import { drawingColors, tools } from '#constants';

export const cursorTypes = Object.freeze({
  default           : 0,
  blackPencil       : 1,
  redPencil         : 2,
  bluePencil        : 3,
  orangePencil      : 4,
  greenPencil       : 5,
  blackPen          : 6,
  redPen            : 7,
  bluePen           : 8,
  orangePen         : 9,
  greenPen          : 10,
  blackHighlighter  : 11,
  redHighlighter    : 12,
  blueHighlighter   : 13,
  orangeHighlighter : 14,
  greenHighlighter  : 15,
  eraser            : 16,
  pointer           : 17,
});

export const tool2cursor = Object.freeze({
  [tools.pencil] : {
    [drawingColors.black]  : cursorTypes.blackPencil,
    [drawingColors.red]    : cursorTypes.redPencil,
    [drawingColors.blue]   : cursorTypes.bluePencil,
    [drawingColors.orange] : cursorTypes.orangePencil,
    [drawingColors.green]  : cursorTypes.greenPencil,
  },
  [tools.pen] : {
    [drawingColors.black]  : cursorTypes.blackPen,
    [drawingColors.red]    : cursorTypes.redPen,
    [drawingColors.blue]   : cursorTypes.bluePen,
    [drawingColors.orange] : cursorTypes.orangePen,
    [drawingColors.green]  : cursorTypes.greenPen,
  },
  [tools.highlighter] : {
    [drawingColors.black]  : cursorTypes.blackHighlighter,
    [drawingColors.red]    : cursorTypes.redHighlighter,
    [drawingColors.blue]   : cursorTypes.blueHighlighter,
    [drawingColors.orange] : cursorTypes.orangeHighlighter,
    [drawingColors.green]  : cursorTypes.greenHighlighter,
  },
  [tools.eraser]  : cursorTypes.eraser,
  [tools.pointer] : cursorTypes.pointer,
});
