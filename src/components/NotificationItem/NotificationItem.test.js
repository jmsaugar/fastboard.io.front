import React from 'react';

import { render } from '#devTools/tests/utils';
import { notificationTypes } from '#constants';

import NotificationItem from './NotificationItem';

describe('Component : NotificationItem', () => {
  test('Is visible with notification content', () => {
    const { queryByText } = render(
      <NotificationItem
        type={notificationTypes.userJoined}
        data={{}}
      />,
    );

    expect(queryByText(`notifications.${notificationTypes.userJoined}`)).toBeInTheDocument();
  });

  test('Snapshot', () => {
    const { asFragment } = render(
      <NotificationItem
        type={notificationTypes.userJoined}
        data={{}}
      />,
    );

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
