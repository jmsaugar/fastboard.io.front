import React from 'react';
import { useSelector } from 'react-redux';

import { notificationsSelector } from '#store';

import NotificationItem from '../NotificationItem';

import SWrapper from './styled';

const NotificationsList = () => {
  const notificationsList = useSelector(notificationsSelector);

  return (
    <SWrapper>
      {notificationsList.map(({ type, data }) => (
        <NotificationItem type={type} data={data} />
      ))}
    </SWrapper>
  );
};

export default NotificationsList;
