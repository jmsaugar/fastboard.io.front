import send from './send';

const data = { data : 123 };

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
    scope.socket.emit = jest.fn((_, receivedData, callback) => callback(false, receivedData));

    return expect(send.call(scope, 'event', data)).rejects.toEqual(new Error(data));
  });
});
