import { Raster } from 'paper';

import { Log, getScaleFactor, point2net } from '#utils';
import {
  canvasIds, drawingsLayers, mapLayers, viewPortItemName,
} from '#constants';

const maxRatio = 0.8; // Max ratio for created raster compared to current viewport
const crossOrigin = 'anonymous'; // @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/crossOrigin

/**
 * Handler for image added to the board.
 *
 * Deals with the project logic.
 *
 * @param {Object} image Image data { url, itemName, position, ratio }.
 *
 * @returns {Promise} Resolved when image loaded with item name (which is a uuidv4).
 */
export default function onImageAdded({
  url, itemName, position : receivedPosition, ratio : receivedRatio,
}) {
  Log.info('Service : Drawings : Tools : Image : onImageAdded', { url });

  const drawingsProject = this.dependencies.projects.drawings;
  const mapProject = this.dependencies.projects.map;

  // Position of the raster on the projects
  const drawingsPosition = receivedPosition || drawingsProject.view.bounds.center;
  const mapPosition = receivedPosition
    || mapProject.layers[mapLayers.viewport].children[viewPortItemName].position;

  const raster = new Raster({
    crossOrigin,
    source   : url,
    name     : itemName,
    position : drawingsPosition,
    parent   : drawingsProject.layers[drawingsLayers.drawings],
  });

  const mapRaster = new Raster({
    source   : url,
    name     : itemName,
    position : mapPosition,
    parent   : mapProject.layers[mapLayers.drawings],
  });

  return new Promise((res, rej) => {
    raster.on('load', () => {
      let scaleRatio;

      // Scale the inserted image if too large for the canvas dimensions
      if (receivedRatio === undefined) {
        const canvas = document.getElementById(canvasIds.drawings);
        scaleRatio = getScaleFactor(
          maxRatio,
          raster.width,
          raster.height,
          canvas.offsetWidth,
          canvas.offsetHeight,
        );
      } else {
        scaleRatio = receivedRatio;
      }

      raster.scale(scaleRatio);
      mapRaster.scale(scaleRatio);

      res({
        url,
        itemName : raster.name,
        position : point2net(raster.position),
        ratio    : scaleRatio,
      });
    });

    raster.on('error', rej);
  });
}
