import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { languageCodes } from '../../constants';

import Dropdown from '../Dropdown';

import SWrapper from './styled';

const Header = () => {
  const { t, i18n } = useTranslation();

  const languageOptions = useMemo(
    () => Object.values(languageCodes).map((code) => ({
      label   : t(`languages.${code}`),
      onClick : () => i18n.changeLanguage(code),
    })),
    [i18n, t],
  );

  return (
    <SWrapper>
      {t('brand')}
      <Dropdown
        label={t(`languages.${i18n.language}`)}
        options={languageOptions}
      />
    </SWrapper>
  );
};

export default Header;
