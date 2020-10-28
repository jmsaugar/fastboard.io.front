import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import {
  SWrapper, STitle, STagLine, SActions, SAction, SInput,
} from './styled';

const CreateStep = ({ show, onCreate, onCancel }) => {
  const { t } = useTranslation('home');

  return (
    <SWrapper show={show}>
      <STitle>
        {t('create.title')}
      </STitle>
      <STagLine>
        {t('create.tagline')}
      </STagLine>
      <SActions>
        <SInput placeholder={t('create.boardName')} />
        <SAction onClick={onCancel}>
          {t('create.cancel')}
        </SAction>
        <SAction onClick={onCreate}>
          {t('create.create')}
        </SAction>
      </SActions>
    </SWrapper>
  );
};

CreateStep.propTypes = {
  show     : PropTypes.bool.isRequired,
  onCreate : PropTypes.func.isRequired,
  onCancel : PropTypes.func.isRequired,
};

export default CreateStep;
