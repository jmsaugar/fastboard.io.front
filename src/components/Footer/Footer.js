import React from 'react';
import { useTranslation } from 'react-i18next';

import routes from '#routes';

import {
  SWrapper, SLink, SExternalLink, SSeparator,
} from './styled';

const Separator = () => <SSeparator>·</SSeparator>;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <SWrapper>
      <SLink to={routes.about}>
        {t('footer.about')}
      </SLink>

      <Separator />

      <SLink to={routes.help}>
        {t('footer.help')}
      </SLink>

      <Separator />

      <SLink to={routes.cookies}>
        {t('footer.cookies')}
      </SLink>

      <Separator />

      <SExternalLink
        href="mailto:@todo"
        target="_blank"
      >
        {t('footer.contact')}
      </SExternalLink>

      <Separator />

      <SExternalLink
        href={process.env.REACT_APP_EXTERNAL_LINK_GITHUB}
        target="_blank"
      >
        {t('footer.github')}
      </SExternalLink>
    </SWrapper>
  );
};

export default Footer;
