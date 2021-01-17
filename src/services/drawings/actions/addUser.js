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

  this.users[userId] = {
    [tools.eraser] : eraserToolFactory(),
    [tools.pen]    : penToolFactory({
      drawingsProject : this.projects.drawings,
      mapProject      : this.projects.map,
    }),
    [tools.pencil] : pencilToolFactory({
      drawingsProject : this.projects.drawings,
      mapProject      : this.projects.map,
    }),
    [tools.highlighter] : highlighterToolFactory({
      drawingsProject : this.projects.drawings,
      mapProject      : this.projects.map,
    }),
    [tools.pointer]  : pointerToolFactory(),
    [tools.text]     : textToolFactory(), // @todo project dependency?
    [tools.clear]    : clearToolFactory({ project : this.project }),
    [tools.selector] : selectorToolFactory({ project : this.project }),
    [tools.image]    : imageToolFactory({
      urlsService : this.dependencies.urlsService,
      project     : this.project,
    }),
  };
}
