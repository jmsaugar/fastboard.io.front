import { v4 as uuidv4 } from 'uuid';
import { Raster } from 'paper';

import { Log } from '#utils';
import { drawingsLayers, mapLayers } from '#constants';

/**
 * Handler for image added to the board.
 *
 * Deals with the project logic.
 *
 * @param {Object} image Image data { image, itemName }.
 *
 * @returns {Promise} Resolved when image loaded with item name (which is a uuidv4).
 */
export default function onImageAdded({ image, itemName : receivedItemName }) {
  Log.info('Service : Drawings : Tools : Image : onImageAdded', { image });

  // @todo reduce image resolution if over certain size

  const itemName = receivedItemName || uuidv4();
  const source = this.dependencies.urlsService.create(image);

  const raster = new Raster({
    source,
    name     : itemName,
    position : this.dependencies.projects.drawings.view.bounds.center,
    parent   : this.dependencies.projects.drawings.layers[drawingsLayers.drawings],
  });

  raster.scale(1 / 3); // @todo fix this

  const mapRaster = new Raster({
    source,
    name     : itemName,
    position : this.dependencies.projects.map.view.bounds.center,
    parent   : this.dependencies.projects.map.layers[mapLayers.drawings],
  });

  mapRaster.scale(1 / 3); // @todo fix this

  return new Promise((res, rej) => {
    raster.on('load', () => res(raster.name));
    raster.on('error', rej);
  });
}
