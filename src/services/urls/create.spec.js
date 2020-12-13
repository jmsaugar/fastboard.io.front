import create from './create';

global.URL.createObjectURL = jest.fn(() => 'http://example.com');

describe('Service : Urls : create', () => {
  let scope;

  beforeEach(() => {
    scope = {
      urls : [],
    };
  });

  test('Correctly create urls and add them to the list', () => {
    const object = {};

    const firstUrl = create.call(scope, object);

    expect(scope.urls).toHaveLength(1);
    expect(scope.urls[0]).toBe(firstUrl);

    const secondUrl = create.call(scope, object);

    expect(scope.urls).toHaveLength(2);
    expect(scope.urls).toEqual(expect.arrayContaining([firstUrl, secondUrl]));

    expect(global.URL.createObjectURL).toHaveBeenCalledTimes(2);
  });
});
