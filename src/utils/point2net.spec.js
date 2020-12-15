import point2net from './point2net';

describe('point2net', () => {
  test('Valid conversion', () => {
    const sourcePoint = {
      x : 20,
      y : 50,
      z : 90,
    };

    expect(point2net(sourcePoint)).toStrictEqual({
      x : sourcePoint.x,
      y : sourcePoint.y,
    });
  });

  test('Invalid conversion', () => {
    expect(() => point2net(undefined)).toThrow();
  });
});
