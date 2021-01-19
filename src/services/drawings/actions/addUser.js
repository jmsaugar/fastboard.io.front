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
  Log.info('Service : Drawings : addUser', { userId });

  const { urlsService } = this.dependencies;
  const drawingsProject = this.projects.drawings;
  const mapProject = this.projects.map;

  this.users[userId] = {
    [tools.eraser]      : eraserToolFactory({ drawingsProject, mapProject }),
    [tools.pen]         : penToolFactory({ drawingsProject, mapProject }),
    [tools.pencil]      : pencilToolFactory({ drawingsProject, mapProject }),
    [tools.highlighter] : highlighterToolFactory({ drawingsProject, mapProject }),
    [tools.pointer]     : pointerToolFactory({ drawingsProject }),
    [tools.text]        : textToolFactory({ drawingsProject, mapProject }),
    [tools.clear]       : clearToolFactory({ drawingsProject, mapProject }),
    [tools.selector]    : selectorToolFactory({ drawingsProject, mapProject }),
    [tools.image]       : imageToolFactory({ urlsService, drawingsProject, mapProject }),
  };
}
