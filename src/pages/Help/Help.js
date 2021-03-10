import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { HeadMeta } from '#components';
import routes from '#routes';
import { analyticsService } from '#services';

import createImg from '#theme/images/help-create.png';
import joinImg from '#theme/images/help-join.png';
import settingsImg from '#theme/images/help-settings.png';
import leaveImg from '#theme/images/help-leave.png';

import drawingImg from '#theme/images/help-drawing.png';
import selectionImg from '#theme/images/help-selection.png';
import writingImg from '#theme/images/help-writing.png';
import pointerImg from '#theme/images/help-pointer.png';
import saveRemoveImg from '#theme/images/help-save-remove.png';

import {
  SWrapper,
  SLine,
  SHeader,
  SSubHeader,
  SContent,
  SSection,
  SSectionImage,
  SSectionText,
  SSectionTextHeader,
} from './styled';

const Help = () => {
  const { t } = useTranslation('help');

  // Analytics pageview
  useEffect(() => analyticsService.pageview(routes.help), []);

  return (
    <>
      <HeadMeta route={routes.help} />
      <SWrapper>
        <SHeader>
          {t('title')}
        </SHeader>

        <SLine />

        <SSubHeader>
          {t('sessions.title')}
        </SSubHeader>
        <SContent>
          {t('sessions.tagline')}
        </SContent>
        <SContent extraSpace>
          <SSection>
            <SSectionImage image={createImg} />
            <SSectionText>
              <SSectionTextHeader>
                {t('sessions.create.header')}
              </SSectionTextHeader>
              <div>
                {t('sessions.create.content')}
              </div>
            </SSectionText>
          </SSection>

          <SSection>
            <SSectionImage image={joinImg} invert />
            <SSectionText>
              <SSectionTextHeader>
                {t('sessions.join.header')}
              </SSectionTextHeader>
              <div>
                {t('sessions.join.content')}
              </div>
            </SSectionText>
          </SSection>

          <SSection>
            <SSectionImage image={settingsImg} />
            <SSectionText>
              <SSectionTextHeader>
                {t('sessions.settings.header')}
              </SSectionTextHeader>
              <div>
                {t('sessions.settings.content')}
              </div>
            </SSectionText>
          </SSection>

          <SSection>
            <SSectionImage image={leaveImg} invert />
            <SSectionText>
              <SSectionTextHeader>
                {t('sessions.leave.header')}
              </SSectionTextHeader>
              <div>
                {t('sessions.leave.content')}
              </div>
            </SSectionText>
          </SSection>
        </SContent>

        <SLine />

        <SSubHeader>
          {t('tools.title')}
        </SSubHeader>
        <SContent>
          {t('tools.tagline')}
        </SContent>
        <SContent extraSpace>
          <SSection>
            <SSectionImage image={drawingImg} />
            <SSectionText>
              <SSectionTextHeader>
                {t('tools.drawing.header')}
              </SSectionTextHeader>
              <div>
                {t('tools.drawing.content')}
              </div>
            </SSectionText>
          </SSection>

          <SSection>
            <SSectionImage image={writingImg} invert />
            <SSectionText>
              <SSectionTextHeader>
                {t('tools.writing.header')}
              </SSectionTextHeader>
              <div>
                {t('tools.writing.content')}
              </div>
            </SSectionText>
          </SSection>

          <SSection>
            <SSectionImage image={selectionImg} />
            <SSectionText>
              <SSectionTextHeader>
                {t('tools.manipulating.header')}
              </SSectionTextHeader>
              <div>
                {t('tools.manipulating.content')}
              </div>
            </SSectionText>
          </SSection>

          <SSection>
            <SSectionImage image={pointerImg} invert />
            <SSectionText>
              <SSectionTextHeader>
                {t('tools.pointer.header')}
              </SSectionTextHeader>
              <div>
                {t('tools.pointer.content')}
              </div>
            </SSectionText>
          </SSection>

          <SSection>
            <SSectionImage image={saveRemoveImg} />
            <SSectionText>
              <SSectionTextHeader>
                {t('tools.saveOrDelete.header')}
              </SSectionTextHeader>
              <div>
                {t('tools.saveOrDelete.content')}
              </div>
            </SSectionText>
          </SSection>
        </SContent>
      </SWrapper>
    </>
  );
};

export default Help;
