import { Raster } from 'paper';

import { Log } from '#utils';

/**
 * Handler for image added to the board.
 *
 * Deals with the project logic.
 *
 * @param {Object} image Image file.
 *
 * @returns {Object} Data to be sent to other users.
 */
export default function onImageAdded({ image }) {
  Log.info('Services : Drawings : Tools : Image : onImageAdded', { image });

  const blob = new Blob([image]);
  const url = URL.createObjectURL(blob);
  const raster = new Raster(url);

  // @todo add image in the center of the canvas

  // @todo keep global references to all images added and revoke urls when removing them or exiting board
  // URL.revokeObjectURL(url);

  raster.selected = true;

  return { image };
}
