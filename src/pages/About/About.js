import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { Button, HeadMeta } from '#components';
import routes from '#routes';
import { analyticsService } from '#services';
import collaborateImg from '#theme/images/about-collaborate.jpg';
import easyImg from '#theme/images/about-easy.jpg';
import openImg from '#theme/images/about-open.jpg';

import {
  SWrapper,
  SHeader,
  SSubHeader,
  SContent,
  SSection,
  SSectionImage,
  SSectionText,
  SSectionTextHeader,
} from './styled';

const About = () => {
  const { t } = useTranslation('about');
  const { push : redirectTo } = useHistory();

  // Analytics pageview
  useEffect(() => analyticsService.pageview(routes.about), []);

  const onStart = () => redirectTo(routes.home);

  return (
    <>
      <HeadMeta route={routes.about} />
      <SWrapper>
        <SHeader>
          {t('title')}
        </SHeader>
        <SSubHeader>
          {t('main.t1')}
        </SSubHeader>
        <SSubHeader>
          {t('main.t2')}
        </SSubHeader>
        <SContent>
          {t('main.t3')}
        </SContent>
        <SContent extraSpace>
          <Button size="md" onClick={onStart}>
            {t('start')}
          </Button>
        </SContent>
        <SContent extraSpace>
          <SSection>
            <SSectionImage image={collaborateImg} />
            <SSectionText>
              <SSectionTextHeader>
                {t('collaborate.header')}
              </SSectionTextHeader>
              <div>
                {t('collaborate.content')}
              </div>
            </SSectionText>
          </SSection>

          <SSection>
            <SSectionImage image={easyImg} invert />
            <SSectionText>
              <SSectionTextHeader>
                {t('easy.header')}
              </SSectionTextHeader>
              <div>
                {t('easy.content')}
              </div>
            </SSectionText>
          </SSection>

          <SSection>
            <SSectionImage image={openImg} />
            <SSectionText>
              <SSectionTextHeader>
                {t('open.header')}
              </SSectionTextHeader>
              <div>
                {t('open.content')}
              </div>
            </SSectionText>
          </SSection>
        </SContent>
      </SWrapper>
    </>
  );
};

export default About;
