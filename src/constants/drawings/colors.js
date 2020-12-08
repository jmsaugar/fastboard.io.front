export const drawingColors = Object.freeze({
  black  : 0,
  red    : 1,
  blue   : 2,
  orange : 3,
  green  : 4,
});

export const drawingColorCodes = Object.freeze({
  [drawingColors.black]  : '#333',
  [drawingColors.red]    : '#da0000',
  [drawingColors.blue]   : '#1d76e1',
  [drawingColors.orange] : '#ebb727',
  [drawingColors.green]  : '#4ecb45',
});

export const defaultDrawingColor = drawingColors.black;

export const selectionColorCode = '#4f9fff';
