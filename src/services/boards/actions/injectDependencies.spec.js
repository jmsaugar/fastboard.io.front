import injectDependencies from './injectDependencies';

const realtimeService = {};
const unusedDependency = {};

describe('Service : boards : injectDependencies', () => {
  let scope;

  beforeEach(() => {
    scope = {
      dependencies : {},
    };
  });

  test('Dependencies correctly injected', () => {
    injectDependencies.call(scope, { realtimeService });

    expect(scope.dependencies.realtimeService).toBe(realtimeService);
  });

  test('Inject both correct and unrequired dependency', () => {
    injectDependencies.call(scope, { realtimeService, unusedDependency });

    expect(scope.dependencies.realtimeService).toBe(realtimeService);
    expect(scope.dependencies.unusedDependency).toBeUndefined();
  });

  test('Not injecting required dependencies', () => {
    expect(() => injectDependencies.call(scope, { unusedDependency })).toThrow();
  });
});
