import React from 'react';
import { useTranslation } from 'react-i18next';

import { SWrapper, SLink, SSeparator } from './styled';

const Separator = () => <SSeparator>·</SSeparator>;

// @todo routes to constants
// @todo fix external link

const Footer = () => {
  const { t } = useTranslation();

  return (
    <SWrapper>
      <SLink to="/about">
        {t('footer.about')}
      </SLink>

      <Separator />

      <SLink to="/about">
        {t('footer.legal')}
      </SLink>

      <Separator />

      <SLink to="/contact">
        {t('footer.contact')}
      </SLink>

      <Separator />

      <SLink to="http://www.github.com">
        {t('footer.github')}
      </SLink>
    </SWrapper>
  );
};

export default Footer;
