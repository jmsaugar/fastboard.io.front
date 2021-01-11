import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Button from '../Button';

import {
  SWrapper, SHeader, SErrorIcon, SContent, SFooter,
} from './styled';

const BoardLeave = ({ isLast, onCancel, onLeave }) => {
  const { t } = useTranslation('board');

  return (
    <SWrapper>
      <SHeader>
        <SErrorIcon />
        {t('leave.title')}
      </SHeader>
      <SContent>
        {t(`leave.message.${isLast ? 'lastUser' : 'notLastUser'}`)}
      </SContent>
      <SFooter>
        <Button type="secondary" onClick={onCancel}>
          {t('leave.cancel')}
        </Button>
        <Button type="primary" onClick={onLeave}>
          {t('leave.leave')}
        </Button>
      </SFooter>
    </SWrapper>
  );
};

BoardLeave.propTypes = {
  isLast   : PropTypes.bool.isRequired,
  onCancel : PropTypes.func.isRequired,
  onLeave  : PropTypes.func.isRequired,
};

export default BoardLeave;
