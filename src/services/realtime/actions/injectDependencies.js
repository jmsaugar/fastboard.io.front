/**
 * Inject service dependencies.
 *
 * @param {Object} params Dependencies { boardsService, drawingsService }.
 *
 * @throws {Error} In case dependencies are not passed.
 */
export default function injectDependencies({ boardsService, drawingsService }) {
  if (!boardsService || !drawingsService) {
    throw new Error('Service : Realtime : injectDependencies : missing dependencies');
  }

  this.dependencies = {
    boardsService,
    drawingsService,
  };
}
