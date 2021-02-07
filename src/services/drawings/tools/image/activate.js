import { v4 as uuidv4 } from 'uuid';
import { Log, compressImage, uploadImage } from '#utils';
import { drawingsMessages, tools } from '#constants';

import onImageAdded from './onImageAdded';

/**
 * Add an image to the board and send the message.
 *
 * @param {Object} image Image file.
 * @param {String} boardId Id of the board the image belongs to.
 *
 * @returns {Promise} Resolved with the item name; rejected if any error.
 */
export default function activate(image, boardId) {
  Log.info('Service : Drawings : Tools : Image : activate', { image, boardId });

  const itemName = uuidv4();

  return compressImage(image)
    .then((compressedImage) => uploadImage(itemName, compressedImage, boardId))
    .then(({ url }) => onImageAdded.call(this, { url, itemName }))
    .then(({ url, position, ratio }) => {
      // @todo .catch? rework this
      this.dependencies.realtimeService.send(
        drawingsMessages.doAddImage,
        {
          tool : tools.image,
          url,
          itemName,
          position,
          ratio,
        },
      );

      return itemName;
    });
}
