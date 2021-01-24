import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { formatDate } from '#utils';

import Button from '../Button';

import {
  SCard, SHeader, SContent, SUser, SUserJoinDate, SFooter,
} from './styled';

// @todo scroll when list is too long
const UsersList = ({
  boardName, myUserName, myJoinDate, others, onClose,
}) => {
  const { t } = useTranslation('board');

  const myJoinDateString = useMemo(
    () => formatDate(new Date(myJoinDate)),
    [myJoinDate],
  );

  const othersList = useMemo(
    () => others.map(({ id, name, joinDate }) => ({
      id,
      name,
      date : formatDate(new Date(joinDate)),
    })),
    [others],
  );

  return (
    <SCard>
      <SHeader>
        {t('meta.usersList.title', {
          count : 1 + others.length,
          boardName,
        })}
      </SHeader>
      <SContent>
        <SUser>
          {t('meta.usersList.you', { name : myUserName })}
          <SUserJoinDate>
            {t('meta.usersList.youJoined', { date : myJoinDateString })}
          </SUserJoinDate>
        </SUser>
        {othersList.map(({ id, name, date }) => (
          <SUser key={id}>
            {name}
            <SUserJoinDate>
              {t('meta.usersList.otherJoined', { date })}
            </SUserJoinDate>
          </SUser>
        ))}
      </SContent>
      <SFooter>
        <Button type="secondary" onClick={onClose}>
          {t('meta.usersList.accept')}
        </Button>
      </SFooter>
    </SCard>
  );
};

UsersList.propTypes = {
  boardName  : PropTypes.string.isRequired,
  myUserName : PropTypes.string.isRequired,
  myJoinDate : PropTypes.string.isRequired,
  others     : PropTypes.arrayOf(PropTypes.shape({
    id       : PropTypes.string.isRequired,
    name     : PropTypes.string.isRequired,
    joinDate : PropTypes.string.isRequired,
  })).isRequired,
  onClose : PropTypes.func.isRequired,
};

export default UsersList;
