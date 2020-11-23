import { PointText, Raster } from 'paper';

/**
 * Check if the given point hits the content of any item in the project.
 * If there is a hit, the item is returned.
 *
 * @param {Object} project Project check hits against.
 * @param {Object} point Point to check hit with.
 *
 * @returns {(Object|Boolean)} Hit item in case there was a hit; false if no hit.
 */
export default function checkContentHit(project, point) {
  const contentHits = project.hitTestAll(point, {
    fill   : true,
    stroke : true,
  });

  return (
    contentHits
    && contentHits.length
    && (
      contentHits[0].item instanceof PointText
      || contentHits[0].item instanceof Raster
    )) ? contentHits[0].item : false;
}
