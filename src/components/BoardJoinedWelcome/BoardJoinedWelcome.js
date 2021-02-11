import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { boardFieldsMaxLengths } from '#constants';

import Button from '../Button';
import Input from '../Input';
import {
  SCard, SHeader, SContent, SFooter,
} from './styled';

const BoardJoinedWelcome = ({
  boardId, isLoading, onJoin, onCancel,
}) => {
  const { t } = useTranslation('board');
  const [userName, setUserName] = useState('');

  return (
    <SCard>
      <SHeader>
        {t('welcome.joined.title', { boardId })}
      </SHeader>
      <SContent>
        <div>
          {t('welcome.joined.about')}
        </div>
        <div>
          {t('welcome.joined.chooseUserName')}
        </div>
        <Input
          name="userName"
          placeholder={t('welcome.joined.userNamePlaceholder')}
          onChange={setUserName}
          maxLength={boardFieldsMaxLengths.userName}
          fullWidth
        />
      </SContent>
      <SFooter>
        <Button type="secondary" onClick={onCancel}>
          {t('welcome.joined.cancel')}
        </Button>
        <Button type="primary" isLoading={isLoading} onClick={() => onJoin(userName)}>
          {t('welcome.joined.join')}
        </Button>
      </SFooter>
    </SCard>
  );
};

BoardJoinedWelcome.propTypes = {
  boardId   : PropTypes.string.isRequired,
  isLoading : PropTypes.bool.isRequired,
  onJoin    : PropTypes.func.isRequired,
  onCancel  : PropTypes.func.isRequired,
};

export default BoardJoinedWelcome;
