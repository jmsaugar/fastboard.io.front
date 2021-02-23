import ReactGA from 'react-ga';

import eventTypes from '../eventTypes';

import processBuffer from './processBuffer';

const eventData = { foo : 123 };
const pageviewData = '/path';

jest.mock('react-ga', () => ({
  __esModule : true,
  default    : {
    event    : jest.fn(),
    pageview : jest.fn(),
  },
}));

describe('Service : analytics : processBuffer', () => {
  let scope;

  beforeEach(() => {
    ReactGA.event.mockClear();
    ReactGA.pageview.mockClear();

    scope = {
      buffer : [{
        type : eventTypes.event,
        data : eventData,
      }, {
        type : eventTypes.pageview,
        data : pageviewData,
      }],
    };
  });

  test('Executes buffered events successfully', () => {
    processBuffer.call(scope);

    expect(scope.buffer).toHaveLength(0);
    expect(ReactGA.event).toHaveBeenCalledTimes(1);
    expect(ReactGA.event).toHaveBeenCalledWith(eventData);
    expect(ReactGA.pageview).toHaveBeenCalledTimes(1);
    expect(ReactGA.pageview).toHaveBeenCalledWith(pageviewData);
  });
});
