import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTranslation, Trans } from 'react-i18next';

import routes from '#routes';

import Button from '../Button';

import { SWrapper, SLink } from './styled';

const CookiesAlert = ({ onAccept }) => {
  const { t } = useTranslation();

  const LinkComponent = useMemo(
    () => <SLink to={routes.cookies} />,
    [],
  );

  return (
    <SWrapper>
      <span>
        <Trans
          i18nKey="cookies.message"
          components={{ linkToLegal : LinkComponent }}
        />
      </span>
      <Button onClick={onAccept}>
        {t('cookies.accept')}
      </Button>
    </SWrapper>
  );
};

CookiesAlert.propTypes = {
  onAccept : PropTypes.func.isRequired,
};

export default CookiesAlert;
