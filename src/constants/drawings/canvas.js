// Full drawings canvas size: 4k
const canvasSize = Object.freeze({
  width  : 3840,
  height : 2160,
});

// Map canvas height in pixels
export const mapHeight = 100;

/**
 * Map canvas width automatically calculated
 * based on canvasSize and mapHeight.
 *
 * In pixels.
 */
export const mapWidth = Math.ceil(canvasSize.width / (canvasSize.height / mapHeight));

export const mapZoom = mapHeight / canvasSize.height;

export const layers = Object.freeze({
  drawings  : 'drawings',
  selection : 'selection',
});
