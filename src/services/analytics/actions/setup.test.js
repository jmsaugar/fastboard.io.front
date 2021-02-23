import setup from './setup';

const analyticsId = '123';

describe('Service : analytics : setup', () => {
  let scope;

  beforeEach(() => {
    scope = {};
  });

  test('Correctly setup the service', () => {
    setup.call(scope, analyticsId);

    expect(scope.analyticsId).toBe(analyticsId);
  });
});
