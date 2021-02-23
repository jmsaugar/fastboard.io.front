import React from 'react';
import { useTranslation } from 'react-i18next';

import { HeadMeta } from '#components';
import routes from '#routes';

import {
  SWrapper, SHeader, SSubHeader, SContent, SList, SListItem, SListItemName,
} from './styled';

const Cookies = () => {
  const { t } = useTranslation('cookies');

  return (
    <>
      <HeadMeta route={routes.cookies} />
      <SWrapper>
        <SHeader>
          {t('title')}
        </SHeader>
        <SContent>
          {t('subtitle')}
        </SContent>

        <SSubHeader>
          {t('what.heading')}
        </SSubHeader>
        <SContent>
          {t('what.p1')}
        </SContent>
        <SContent>
          {t('what.p2')}
        </SContent>

        <SSubHeader>
          {t('which.heading')}
        </SSubHeader>
        <SContent>
          {t('which.p1')}
        </SContent>
        <SContent>
          {t('which.p2.heading')}
          <SList>
            <SListItem>
              {t('which.p2.list.own.description')}
              <SList>
                <SListItem>
                  <SListItemName>
                    {t('which.p2.list.own.cookies.language.name')}
                    :
                  </SListItemName>
                  {t('which.p2.list.own.cookies.language.description')}
                </SListItem>
                <SListItem>
                  <SListItemName>
                    {t('which.p2.list.own.cookies.allow.name')}
                    :
                  </SListItemName>
                  {t('which.p2.list.own.cookies.allow.description')}
                </SListItem>
              </SList>
            </SListItem>
            <SListItem>
              {t('which.p2.list.thirdParty.description')}
              <SList>
                <SListItem>
                  <SListItemName>
                    {t('which.p2.list.thirdParty.cookies.analytics.name')}
                    :
                  </SListItemName>
                  {t('which.p2.list.thirdParty.cookies.analytics.description')}
                </SListItem>
              </SList>
            </SListItem>
          </SList>
        </SContent>

        <SSubHeader>
          {t('acceptance.heading')}
        </SSubHeader>
        <SContent>
          {t('acceptance.p1')}
        </SContent>
        <SContent>
          {t('acceptance.p2')}
        </SContent>
        <SContent>
          {t('acceptance.p3')}
        </SContent>
      </SWrapper>
    </>
  );
};

export default Cookies;
