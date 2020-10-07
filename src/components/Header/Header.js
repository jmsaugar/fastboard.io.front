import React from 'react';
import { useTranslation } from 'react-i18next';

import SWrapper from './styled';

const Header = () => {
  const { t } = useTranslation();

  return (
    <SWrapper>
      {t('brand')}
    </SWrapper>
  );
};

export default Header;
