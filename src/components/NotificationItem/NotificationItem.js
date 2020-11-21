import React from 'react';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { notificationTypes } from '#constants';

import SWrapper from './styled';

const NotificationItem = ({ type, data }) => {
  const { t } = useTranslation('board');

  return (
    <SWrapper>
      {t(`notifications.${type}`, { ...data })}
    </SWrapper>
  );
};

NotificationItem.defaultProps = {
  data : undefined,
};

NotificationItem.propTypes = {
  type : propTypes.oneOf(Object.values(notificationTypes)).isRequired,
  data : propTypes.shape({}),
};

export default NotificationItem;
