import ReactGA from 'react-ga';

import eventTypes from '../eventTypes';

import event from './event';

const eventObject = { foo : 123 };

jest.mock('react-ga', () => ({
  __esModule : true,
  default    : {
    event : jest.fn(),
  },
}));

describe('Service : analytics : event', () => {
  let scope;

  beforeEach(() => {
    Storage.prototype.getItem = jest.fn(() => false);
    ReactGA.event.mockClear();

    scope = {
      isStarted : false,
      buffer    : [],
    };
  });

  test('Saves event in buffer if service not started', () => {
    Storage.prototype.getItem = jest.fn(() => true);
    event.call(scope, eventObject);

    expect(scope.buffer).toHaveLength(1);
    expect(scope.buffer[0].data).toBe(eventObject);
    expect(scope.buffer[0].type).toBe(eventTypes.event);
  });

  test('Saves event in buffer if cookies not allowed', () => {
    scope.isStarted = true;
    event.call(scope, eventObject);

    expect(scope.buffer).toHaveLength(1);
    expect(scope.buffer[0].data).toBe(eventObject);
    expect(scope.buffer[0].type).toBe(eventTypes.event);
  });

  test('Event is successfully processed', () => {
    scope.isStarted = true;
    Storage.prototype.getItem = jest.fn(() => true);
    event.call(scope, eventObject);

    expect(scope.buffer).toHaveLength(0);
    expect(ReactGA.event).toHaveBeenCalledTimes(1);
    expect(ReactGA.event).toHaveBeenCalledWith(eventObject);
  });
});
