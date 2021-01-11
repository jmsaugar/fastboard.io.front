import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { defaultLanguageCode, i18nNamespaces } from '#constants';

// @todo fix issue in dropdown menu when default language not supported
export default () => i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug @todo
    fallbackLng   : defaultLanguageCode,
    ns            : i18nNamespaces,
    defaultNS     : i18nNamespaces[0],
    // keyseparator @todo
    interpolation : {
      escapeValue : false, // Not needed for react as it escapes by default
    },
  });
