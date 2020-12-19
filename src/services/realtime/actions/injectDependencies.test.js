import injectDependencies from './injectDependencies';

const boardsService = {};
const drawingsService = {};
const unusedDependency = {};

describe('Service : realtime : injectDependencies', () => {
  let scope;

  beforeEach(() => {
    scope = {
      dependencies : {},
    };
  });

  test('Dependencies correctly injected', () => {
    injectDependencies.call(scope, { boardsService, drawingsService });

    expect(scope.dependencies.boardsService).toBe(boardsService);
    expect(scope.dependencies.drawingsService).toBe(drawingsService);
  });

  test('Inject both correct and unrequired dependency', () => {
    injectDependencies.call(scope, { boardsService, drawingsService, unusedDependency });

    expect(scope.dependencies.boardsService).toBe(boardsService);
    expect(scope.dependencies.drawingsService).toBe(drawingsService);
    expect(scope.dependencies.unusedDependency).toBeUndefined();
  });

  test('Not injecting required dependencies', () => {
    expect(() => injectDependencies.call(scope, { unusedDependency })).toThrow();
  });
});
