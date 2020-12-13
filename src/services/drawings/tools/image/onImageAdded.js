import { v4 as uuidv4 } from 'uuid';
import { Raster } from 'paper';

import { Log } from '#utils';

/**
 * Handler for image added to the board.
 *
 * Deals with the project logic.
 *
 * @param {Object} image Image data { image, itemName }.
 *
 * @returns {Promise} Resolved when image loaded with item name (which is an uuidv4).
 */
export default function onImageAdded({ image, itemName }) {
  Log.info('Service : Drawings : Tools : Image : onImageAdded', { image });

  // @todo reduce image resolution if over certain size

  const raster = new Raster({
    name     : itemName || uuidv4(),
    source   : this.dependencies.urlsService.create(image),
    position : this.dependencies.project.view.bounds.center,
  });

  raster.scale(1/3); // @todo fix this

  return new Promise((res, rej) => {
    raster.on('load', () => res(raster.name));
    raster.on('error', rej);
  });
}
