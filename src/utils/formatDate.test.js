import formatDate from './formatDate';

const date = new Date('2021-02-28T12:14:15.000Z');

const toLocaleTimeStringSpy = jest.spyOn(Date.prototype, 'toLocaleTimeString');
const toLocaleDateStringSpy = jest.spyOn(Date.prototype, 'toLocaleDateString');

describe('Utils : formatDate', () => {
  beforeEach(() => {
    toLocaleTimeStringSpy.mockClear();
    toLocaleDateStringSpy.mockClear();
  });

  test('Correct datetime for en locale', () => {
    formatDate(date);
    expect(toLocaleTimeStringSpy).toHaveBeenCalledTimes(1);
    expect(toLocaleDateStringSpy).toHaveBeenCalledTimes(1);
  });

  test('Incorrect datetime', () => {
    expect(formatDate(123)).toBeUndefined();
    expect(formatDate('123')).toBeUndefined();
    expect(formatDate(null)).toBeUndefined();

    expect(toLocaleTimeStringSpy).toHaveBeenCalledTimes(0);
    expect(toLocaleDateStringSpy).toHaveBeenCalledTimes(0);
  });
});
