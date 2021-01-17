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
} from '../../tools';

export default function setupTools() {
  const { urlsService, realtimeService } = this.dependencies;

  return {
    [tools.pencil] : pencilToolFactory({
      realtimeService,
      drawingsProject : this.projects.drawings,
      mapProject      : this.projects.map,
    }),
    [tools.pen] : penToolFactory({
      realtimeService,
      drawingsProject : this.projects.drawings,
      mapProject      : this.projects.map,
    }),
    [tools.highlighter] : highlighterToolFactory({
      realtimeService,
      drawingsProject : this.projects.drawings,
      mapProject      : this.projects.map,
    }),
    [tools.eraser]   : eraserToolFactory({ realtimeService }),
    [tools.pointer]  : pointerToolFactory({ realtimeService }),
    [tools.text]     : textToolFactory({ realtimeService, project : this.project }),
    [tools.clear]    : clearToolFactory({ realtimeService, project : this.project }),
    [tools.selector] : selectorToolFactory({ realtimeService, project : this.project }),
    [tools.image]    : imageToolFactory({
      urlsService,
      realtimeService,
      project : this.project,
    }),
  };
}
