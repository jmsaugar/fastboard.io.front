import { Log } from '#utils';
import { drawingsMessages, tools } from '#constants';

import onImageAdded from './onImageAdded';

/**
* Add an image to the board and send the message.
*
* @param {Object} image Image file.
*/
export default function activate(image) {
  Log.info('Service : Drawings : Tools : Image : activate', { image });

  return onImageAdded.call(this, { image })
    .then((itemName) => {

      // @todo .catch? rework this
      this.dependencies.realtimeService.send(
        drawingsMessages.doAddImage,
        { tool : tools.image, image, itemName },
      );

      return itemName;
    });
}
