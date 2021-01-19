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
  const drawingsProject = this.projects.drawings;
  const mapProject = this.projects.map;

  return {
    [tools.pencil]      : pencilToolFactory({ realtimeService, drawingsProject, mapProject }),
    [tools.pen]         : penToolFactory({ realtimeService, drawingsProject, mapProject }),
    [tools.highlighter] : highlighterToolFactory({ realtimeService, drawingsProject, mapProject }),
    [tools.eraser]      : eraserToolFactory({ realtimeService, drawingsProject, mapProject }),
    [tools.pointer]     : pointerToolFactory({ realtimeService, drawingsProject }),
    [tools.text]        : textToolFactory({ realtimeService, drawingsProject, mapProject }),
    [tools.clear]       : clearToolFactory({ realtimeService, drawingsProject, mapProject }),
    [tools.selector]    : selectorToolFactory({ realtimeService, drawingsProject, mapProject }),
    [tools.image]       : imageToolFactory({
      urlsService, realtimeService, drawingsProject, mapProject,
    }),
  };
}
