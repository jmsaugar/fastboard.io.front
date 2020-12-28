import revokeAll from './revokeAll';

describe('Service : Urls : revokeAll', () => {
  let scope;

  beforeEach(() => {
    global.URL.revokeObjectURL = jest.fn();

    scope = {
      urls : [
        'http://example1.com',
        'http://example2.com',
        'http://example3.com',
      ],
    };
  });

  test('Correctly revoke urls and remove them from the list', () => {
    revokeAll.call(scope);

    expect(scope.urls).toHaveLength(0);
    expect(global.URL.revokeObjectURL).toHaveBeenCalledTimes(3);
  });
});