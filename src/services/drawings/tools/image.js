import { Raster } from 'paper';

import { Log } from '#utils';
import { drawingsMessages, tools } from '#constants';

/**
 * Handler for image added to the board.
 *
 * Deals with the project logic.
 *
 * @param {Object} image Image file.
 *
 * @returns {Object} Data to be sent to other users.
 */
function onImageAdded({ image }) {
  Log.info('Services : Drawings : Tools : Image : onImageAdded', { image });

  const blob = new Blob([image]);
  const url = URL.createObjectURL(blob);
  const raster = new Raster(url);

  // @todo keep global references to all images added and revoke urls when removing them or exiting board
  // URL.revokeObjectURL(url);

  raster.selected = true;

  return { image };
}

/**
 * Add an image to the board and send the message.
 *
 * @param {Object} image Image file.
 */
function activate(image) {
  Log.info('Services : Drawings : Tools : Image : activate', { image });

  this.dependencies.realtimeService.send(
    drawingsMessages.doAddImage,
    {
      tool : tools.image,
      ...onImageAdded.call(this, { image }),
    },
  ); // @todo .catch?
}

export default (dependencies) => {
  Log.info('Services : Drawings : Tools : Image : create');

  const scope = {
    dependencies : {
      realtimeService : dependencies?.realtimeService,
    },
  };

  return Object.freeze({
    activate     : activate.bind(scope),
    onImageAdded : onImageAdded.bind(scope),
  });
};
