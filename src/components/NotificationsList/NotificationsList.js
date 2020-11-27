import React from 'react';
import { useSelector } from 'react-redux';

import { notificationsSelector } from '#store';

import NotificationItem from '../NotificationItem';

import SWrapper from './styled';

const NotificationsList = () => {
  const notificationsList = useSelector(notificationsSelector);

  return (
    <SWrapper>
      {notificationsList.map(({ id, type, data }) => (
        <NotificationItem key={id} type={type} data={data} />
      ))}
    </SWrapper>
  );
};

export default NotificationsList;
