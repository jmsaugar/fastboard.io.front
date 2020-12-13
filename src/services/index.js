import boardsServiceFactory from './boards';
import drawingsServiceFactory from './drawings';
import realtimeServiceFactory from './realtime';
import urlsServiceFactory from './urls';

// Create services instances
const boardsService = boardsServiceFactory();
const drawingsService = drawingsServiceFactory();
const realtimeService = realtimeServiceFactory();
const urlsService = urlsServiceFactory();

// Inject services dependencies
boardsService.injectDependencies({ realtimeService });
drawingsService.injectDependencies({ realtimeService, urlsService });
realtimeService.injectDependencies({ boardsService, drawingsService });

export {
  boardsService,
  drawingsService,
  realtimeService,
  urlsService,
};
