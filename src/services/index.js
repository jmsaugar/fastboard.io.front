import analyticsServiceFactory from './analytics';
import boardsServiceFactory from './boards';
import drawingsServiceFactory from './drawings';
import realtimeServiceFactory from './realtime';

// Create services instances
const analyticsService = analyticsServiceFactory();
const boardsService = boardsServiceFactory();
const drawingsService = drawingsServiceFactory();
const realtimeService = realtimeServiceFactory();

// Inject services dependencies
boardsService.injectDependencies({ realtimeService });
drawingsService.injectDependencies({ realtimeService });
realtimeService.injectDependencies({ boardsService, drawingsService });

export {
  analyticsService,
  boardsService,
  drawingsService,
  realtimeService,
};
