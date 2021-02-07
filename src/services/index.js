import boardsServiceFactory from './boards';
import drawingsServiceFactory from './drawings';
import realtimeServiceFactory from './realtime';

// Create services instances
const boardsService = boardsServiceFactory();
const drawingsService = drawingsServiceFactory();
const realtimeService = realtimeServiceFactory();

// Inject services dependencies
boardsService.injectDependencies({ realtimeService });
drawingsService.injectDependencies({ realtimeService });
realtimeService.injectDependencies({ boardsService, drawingsService });

export {
  boardsService,
  drawingsService,
  realtimeService,
};
