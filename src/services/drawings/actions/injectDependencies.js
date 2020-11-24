import { Log } from '#utils';

/**
 * Inject service dependencies.
 *
 * @param {Object} params Dependencies { realtimeService }.
 *
 * @throws {Error} In case dependencies are not passed.
 */
export default function injectDependencies({ realtimeService }) {
  Log.info('Services : Drawings : injectDependencies', { realtimeService });

  if (!realtimeService) {
    throw new Error('Services : Drawings : injectDependencies : missing dependencies');
  }

  this.dependencies = { realtimeService };
}
