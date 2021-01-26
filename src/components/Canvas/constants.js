import { cursorTypes, drawingColors, tools } from '#constants';

export default Object.freeze({
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
