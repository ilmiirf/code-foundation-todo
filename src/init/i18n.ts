import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend, { type HttpBackendOptions } from 'i18next-http-backend';

import { getConfig } from './config';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    backend: {
      loadPath: getConfig('i18n.loadPath'),
    },
    lng: getConfig('i18n.lang'),
    fallbackLng: getConfig('i18n.fallbackLang'),
    debug: import.meta.env.NODE_ENV !== 'production',
    ns: ['common'],
    defaultNS: 'common',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

// console.log(getConfig('i18n.loadPath'));

export default i18n;
