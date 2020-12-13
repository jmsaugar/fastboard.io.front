import { Log } from '#utils';

/**
 * Inject service dependencies.
 *
 * @param {Object} params Dependencies { realtimeService }.
 *
 * @throws {Error} In case dependencies are not passed.
 */
export default function injectDependencies({ urlsService, realtimeService }) {
  Log.info('Service : Drawings : injectDependencies', { urlsService, realtimeService });

  if (!urlsService || !realtimeService) {
    throw new Error('Service : Drawings : injectDependencies : missing dependencies');
  }

  this.dependencies = { urlsService, realtimeService };
}
