import React from 'react';

import { render } from '#devTools/tests/utils';
import { notificationTypes as mockNotificationTypes } from '#constants';

import NotificationsList from './NotificationsList';

const mockStore = {
  notifications : [
    { id : 1, type : mockNotificationTypes.userJoined, data : {} },
    { id : 2, type : mockNotificationTypes.userJoined, data : {} },
    { id : 3, type : mockNotificationTypes.userJoined, data : {} },
  ],
};

describe('Component : NotificationsList', () => {
  test('Is visible with list of notification items', () => {
    const { queryAllByTestId } = render(<NotificationsList />, mockStore);

    const items = queryAllByTestId('notificationitem-component');

    expect(items).toHaveLength(3);
  });

  test('Snapshot', () => {
    const { asFragment } = render(<NotificationsList />);

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
