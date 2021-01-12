import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { defaultLanguageCode, languageCodes, i18nNamespaces } from '#constants';

export default () => i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs : Object.values(languageCodes),
    fallbackLng   : defaultLanguageCode,
    ns            : i18nNamespaces,
    defaultNS     : i18nNamespaces[0],
    interpolation : {
      escapeValue : false, // Not needed for react as it escapes by default
    },
  });
