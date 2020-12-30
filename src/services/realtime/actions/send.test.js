import { BoardError } from '#utils';

import send from './send';

const data = { data : 123 };
const error = { code : 456 };

describe('Service : realtime : send', () => {
  let scope;

  beforeEach(() => {
    scope = {
      socket : {},
    };
  });

  test('Correctly send a message', () => {
    scope.socket.emit = jest.fn((_, receivedData, callback) => callback(true, receivedData));

    return expect(send.call(scope, 'event', data)).resolves.toEqual(data);
  });

  test('Sending action is rejected', () => {
    scope.socket.emit = jest.fn((_, receivedData, callback) => callback(false, error));

    return expect(send.call(scope, 'event', data)).rejects.toThrow(new BoardError(error.code));
  });
});
