import React from 'react';
import { useTranslation } from 'react-i18next';

import SWrapper from './styled';

const Header = () => {
  const { t } = useTranslation('common');

  return (
    <SWrapper>
      {t('brand')}
    </SWrapper>
  );
};

export default Header;
