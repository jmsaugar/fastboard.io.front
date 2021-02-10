import React from 'react';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { notificationTypes } from '#constants';

import variants from './variants';
import SWrapper from './styled';

const testId = 'notificationitem-component';

// Notification item style varies depending on type
const type2variant = Object.freeze({
  [notificationTypes.userJoined]       : variants.info,
  [notificationTypes.userLeft]         : variants.info,
  [notificationTypes.userNameSet]      : variants.info,
  [notificationTypes.boardNameSet]     : variants.info,
  [notificationTypes.boardCleared]     : variants.info,
  [notificationTypes.boardExportError] : variants.error,
});

const NotificationItem = ({ type, data }) => {
  const { t } = useTranslation('board');

  return (
    <SWrapper variant={type2variant[type]} data-testid={testId}>
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
