import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { SWrapper, STitle, STagLine, SActions, SAction, SInput } from './styled';

const JoinStep = ({ show, onJoin, onCancel }) => {
  const { t } = useTranslation('home');

  return (
    <SWrapper show={show}>
      <STitle>
        {t('join.title')}
      </STitle>
      <STagLine>
        {t('join.tagline')}
      </STagLine>
      <SActions>
        <SInput placeholder={t('join.boardId')} />
        <SAction onClick={onCancel}>
          {t('join.cancel')}
        </SAction>
        <SAction onClick={onJoin}>
          {t('join.join')}
        </SAction>
      </SActions>
    </SWrapper>
  );
};

JoinStep.propTypes = {
  show     : PropTypes.bool.isRequired,
  onJoin   : PropTypes.func.isRequired,
  onCancel : PropTypes.func.isRequired,
};

export default JoinStep;
