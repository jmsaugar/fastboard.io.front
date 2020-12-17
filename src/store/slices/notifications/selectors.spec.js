import notificationsSelector from './selectors';

const notificationsArray = [
  { id : 1 },
  { id : 2 },
];

describe('Store : notifications : selectors', () => {
  let state;

  beforeEach(() => {
    state = {
      notifications : notificationsArray,
    };
  });

  test('Notifications selector working correctly', () => {
    expect(notificationsSelector(state)).toBe(notificationsArray);
  });
});
