import { Project } from 'paper';

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
 * Start project for the specified canvas.
 *
 * @param {String} canvasId Id of the canvas html element.
 */
export default function start(canvasId) {
  Log.info('Service : Drawings : start', { canvasId });

  if (!this.isStarted) {
    this.project = new Project(canvasId);
    this.isStarted = true;

    const { realtimeService } = this.dependencies;

    this.tools = {
      [tools.pencil]      : pencilToolFactory({ realtimeService }),
      [tools.pen]         : penToolFactory({ realtimeService }),
      [tools.highlighter] : highlighterToolFactory({ realtimeService }),
      [tools.eraser]      : eraserToolFactory({ realtimeService }),
      [tools.pointer]     : pointerToolFactory({ realtimeService }),
      [tools.text]        : textToolFactory({ realtimeService }),
      [tools.image]       : imageToolFactory({ realtimeService }),
      [tools.clear]       : clearToolFactory({ realtimeService, project : this.project }),
      [tools.selector]    : selectorToolFactory({ realtimeService, project : this.project }),
    };

    Log.debug('Service : Drawings : start : started');
  }
}
