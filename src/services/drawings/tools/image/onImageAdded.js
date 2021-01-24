import { v4 as uuidv4 } from 'uuid';
import { Raster } from 'paper';

import { Log, point2net } from '#utils';
import { drawingsLayers, mapLayers, viewPortItemName } from '#constants';

/**
 * Handler for image added to the board.
 *
 * Deals with the project logic.
 *
 * @param {Object} image Image data { image, itemName, position }.
 *
 * @returns {Promise} Resolved when image loaded with item name (which is a uuidv4).
 */
export default function onImageAdded({
  image, itemName : receivedItemName, position : receivedPosition,
}) {
  Log.info('Service : Drawings : Tools : Image : onImageAdded', { image });

  // @todo reduce image resolution if over certain size

  const drawingsProject = this.dependencies.projects.drawings;
  const mapProject = this.dependencies.projects.map;

  const itemName = receivedItemName || uuidv4();
  const source = this.dependencies.urlsService.create(image);

  // Position of the raster on the projects
  const drawingsPosition = receivedPosition || drawingsProject.view.bounds.center;
  const mapPosition = receivedPosition
    || mapProject.layers[mapLayers.viewport].children[viewPortItemName].position;

  const raster = new Raster({
    source,
    name     : itemName,
    position : drawingsPosition,
    parent   : drawingsProject.layers[drawingsLayers.drawings],
  });

  raster.scale(1 / 3); // @todo fix this

  const mapRaster = new Raster({
    source,
    name     : itemName,
    position : mapPosition,
    parent   : mapProject.layers[mapLayers.drawings],
  });

  mapRaster.scale(1 / 3); // @todo fix this

  return new Promise((res, rej) => {
    raster.on('load', () => res({ itemName : raster.name, position : point2net(raster.position) }));
    raster.on('error', rej);
  });
}
