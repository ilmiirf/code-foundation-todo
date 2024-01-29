const config = {
  appTitle: import.meta.env.VITE_APP_TITLE ?? 'App',
  appVersion: import.meta.env.VITE_APP_VERSION ?? '1.0.0',

  statePersistKey: import.meta.env.VITE_APP_STATE_PERSIST_KEY ?? 'AppData',

  apiUrl: {
    todoData: import.meta.env.VITE_APP_BASE_URL ?? '',
    authUser: import.meta.env.VITE_APP_AUTH_URL ?? '',
  },

  i18n: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    lang: 'en',
    fallbackLang: 'en',
  },
};

export default config;
