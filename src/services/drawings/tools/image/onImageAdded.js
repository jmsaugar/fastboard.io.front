import { Raster } from 'paper';

import { Log } from '#utils';

import { createSelectionHandlers } from '../utils';

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

  // @todo reduce image resolution if over certain size

  const blob = new Blob([image]);
  const url = URL.createObjectURL(blob);
  const raster = new Raster(url);
  raster.scale(1/3); // @todo fix this
  raster.set({ position : this.dependencies.project.view.bounds.center });

  // @todo add image in the center of the canvas

  // @todo keep global references to all images added and revoke urls when removing them or exiting board
  // URL.revokeObjectURL(url);

  createSelectionHandlers(
    raster,
    this.dependencies.project.layers.selection,
  );

  return { image };
}
