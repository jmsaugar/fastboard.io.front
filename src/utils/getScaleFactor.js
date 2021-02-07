/**
 * Calculate required resizing ratio for an item inside a container
 * for it not to exceed the given max ratio in any of its dimensions.
 *
 * @param {Number} maxRatio Max ratio between item and container dimensions.
 * @param {Number} itemWidth Item width.
 * @param {Number} itemHeight Item height.
 * @param {Number} containerWidth Container width.
 * @param {Number} containerHeight Container height.
 *
 * @throws {Error} In case any of the given parameters are not valid.
 *
 * @returns {Number} Resizing ratio to be applied to the item.
 */
export default function getScaleFactor(
  maxRatio, itemWidth, itemHeight, containerWidth, containerHeight,
) {
  [maxRatio, itemWidth, itemHeight, containerWidth, containerHeight]
    .forEach((i) => {
      if (i <= 0) {
        throw new Error('Some of the parameters are zero or less');
      }
    });

  const currentWidthRatio = itemWidth / containerWidth;
  const currentHeightRatio = itemHeight / containerHeight;

  if (currentWidthRatio <= maxRatio && currentHeightRatio <= maxRatio) {
    return 1;
  }

  const [rasterDimension, canvasDimension] = currentWidthRatio > currentHeightRatio
    ? [itemWidth, containerWidth] : [itemHeight, containerHeight];

  return (maxRatio * canvasDimension) / rasterDimension;
}
