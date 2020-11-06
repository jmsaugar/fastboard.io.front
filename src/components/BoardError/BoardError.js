import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { boardsErrors } from '#constants';
import Button from '../Button';

import {
  SWrapper, SHeader, SErrorIcon, SContent, SFooter,
} from './styled';

const BoardError = ({ code, onClose }) => {
  const { t } = useTranslation('board');

  return (
    <SWrapper>
      <SHeader>
        <SErrorIcon />
        {t('error.title')}
      </SHeader>
      <SContent>
        {t(`error.messages.${code}`)}
      </SContent>
      <SFooter>
        <Button type="secondary" onClick={onClose}>
          {t('error.accept')}
        </Button>
      </SFooter>
    </SWrapper>
  );
};

BoardError.propTypes = {
  code    : PropTypes.oneOf(Object.values(boardsErrors)).isRequired,
  onClose : PropTypes.func.isRequired,
};

export default BoardError;
