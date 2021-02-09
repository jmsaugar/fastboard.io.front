/**
 * Inject service dependencies.
 *
 * @param {Object} params Dependencies { realtimeService }.
 *
 * @throws {Error} In case dependencies are not passed.
 */
export default function injectDependencies({ realtimeService }) {
  if (!realtimeService) {
    throw new Error('Service : Drawings : injectDependencies : missing dependencies');
  }

  this.dependencies = { realtimeService };
}
