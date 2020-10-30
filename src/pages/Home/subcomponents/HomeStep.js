import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import {
  SWrapper, STitle, STagLine, SActions, SAction,
} from './styled';

const HomeStep = ({ show, onCreate, onJoin }) => {
  const { t } = useTranslation('home');

  return (
    <SWrapper show={show}>
      <STitle>
        {t('home.title')}
      </STitle>
      <STagLine>
        {t('home.tagline')}
      </STagLine>
      <SActions>
        <SAction onClick={() => onCreate()}>
          {t('home.create')}
        </SAction>
        <SAction onClick={onJoin}>
          {t('home.join')}
        </SAction>
      </SActions>
    </SWrapper>
  );
};

HomeStep.propTypes = {
  show     : PropTypes.bool.isRequired,
  onCreate : PropTypes.func.isRequired,
  onJoin   : PropTypes.func.isRequired,
};

export default HomeStep;
