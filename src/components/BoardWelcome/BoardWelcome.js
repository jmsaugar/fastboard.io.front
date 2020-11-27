import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Button from '../Button';
import Input from '../Input';
import {
  SWrapper, SHeader, SContent, SFooter,
} from './styled';

const BoardWelcome = ({
  boardId, isLoading, onJoin, onCancel,
}) => {
  const { t } = useTranslation('board');
  const [userName, setUserName] = useState('');

  const onBoardNameChange = useCallback(
    (evt) => setUserName(evt.target.value),
    [setUserName],
  );

  return (
    <SWrapper>
      <SHeader>
        {t('welcome.title', { boardId })}
      </SHeader>
      <SContent>
        <div>
          {t('welcome.about')}
        </div>
        <div>
          {t('welcome.chooseUserName')}
        </div>
        <Input
          name="userName"
          placeholder={t('welcome.userNamePlaceholder')}
          onChange={onBoardNameChange}
          fullWidth
        />
      </SContent>
      <SFooter>
        <Button type="secondary" onClick={onCancel}>
          {t('welcome.cancel')}
        </Button>
        <Button type="primary" isLoading={isLoading} onClick={() => onJoin(userName)}>
          {t('welcome.join')}
        </Button>
      </SFooter>
    </SWrapper>
  );
};

BoardWelcome.propTypes = {
  boardId   : PropTypes.string.isRequired,
  isLoading : PropTypes.bool.isRequired,
  onJoin    : PropTypes.func.isRequired,
  onCancel  : PropTypes.func.isRequired,
};

export default BoardWelcome;
