import { Log } from '#utils';

/**
 * Inject service dependencies.
 *
 * @param {Object} params Dependencies { realtimeService }.
 *
 * @throws {Error} In case dependencies are not passed.
 */
export default function injectDependencies({ realtimeService }) {
  Log.info('Services : Boards : injectDependencies', { realtimeService });

  if (!realtimeService) {
    throw new Error('Services : Boards : injectDependencies : missing dependencies');
  }

  this.dependencies = { realtimeService };
}
