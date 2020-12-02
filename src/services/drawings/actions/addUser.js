import { Log } from '#utils';
import { tools } from '#constants';

import {
  eraserToolFactory,
  highlighterToolFactory,
  penToolFactory,
  pencilToolFactory,
  pointerToolFactory,
  textToolFactory,
  imageToolFactory,
  clearToolFactory,
  selectorToolFactory,
} from '../tools';

/**
 * Add a remote user whose drawings have to be handled.
 *
 * @param {String} userId Id of the new user.
 */
export default function addUser(userId) {
  Log.info('Services : Drawings : addUser', { userId });

  this.users[userId] = {
    [tools.eraser]      : eraserToolFactory(),
    [tools.pen]         : penToolFactory(),
    [tools.pencil]      : pencilToolFactory(),
    [tools.highlighter] : highlighterToolFactory(),
    [tools.pointer]     : pointerToolFactory(),
    [tools.text]        : textToolFactory(),
    [tools.image]       : imageToolFactory(),
    [tools.clear]       : clearToolFactory({ project : this.project }),
    [tools.selector]    : selectorToolFactory({ project : this.project }),
  };
}