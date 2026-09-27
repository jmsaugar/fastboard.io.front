import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Button from '../Button';
import {
  SCard, SHeader, SErrorIcon, SContent, SFooter,
} from './styled';

const ClearConfirmation = ({ onConfirm, onCancel }) => {
  const { t } = useTranslation('board');

  return (
    <SCard>
      <SHeader>
        <SErrorIcon />
        {t('clearConfirmation.title')}
      </SHeader>
      <SContent>
        {t('clearConfirmation.about')}
      </SContent>
      <SFooter>
        <Button variant="secondary" onClick={onCancel}>
          {t('clearConfirmation.cancel')}
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          {t('clearConfirmation.accept')}
        </Button>
      </SFooter>
    </SCard>
  );
};

ClearConfirmation.propTypes = {
  onConfirm : PropTypes.func.isRequired,
  onCancel  : PropTypes.func.isRequired,
};

export default ClearConfirmation;
