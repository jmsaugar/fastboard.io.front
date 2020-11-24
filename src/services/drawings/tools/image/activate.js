import { Log } from '#utils';
import { drawingsMessages, tools } from '#constants';

import onImageAdded from './onImageAdded';

/**
* Add an image to the board and send the message.
*
* @param {Object} image Image file.
*/
export default function activate(image) {
  Log.info('Services : Drawings : Tools : Image : activate', { image });

  this.dependencies.realtimeService.send(
    drawingsMessages.doAddImage,
    {
      tool : tools.image,
      ...onImageAdded.call(this, { image }),
    },
  ); // @todo .catch?
}
