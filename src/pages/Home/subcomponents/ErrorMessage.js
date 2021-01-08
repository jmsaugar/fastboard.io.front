import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { boardsErrors } from '#constants';

import { SErrorIcon, SErrorMessage } from './styled';

const ErrorMessage = ({ code }) => {
  const { t } = useTranslation('home');

  return (
    <SErrorMessage>
      <SErrorIcon />
      {t(`error.${code}`)}
    </SErrorMessage>
  );
};

ErrorMessage.propTypes = {
  code : PropTypes.oneOf(Object.values(boardsErrors)).isRequired,
};

export default ErrorMessage;
