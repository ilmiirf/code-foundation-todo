/* eslint-disable @typescript-eslint/no-var-requires */

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { setupListeners } from '@reduxjs/toolkit/query';
import { getConfig, isDevelopment } from 'init/config';
import rootReducer from './store.rootReducer';
import middlewares from './store.middlewares';

const persistConfig = {
  key: getConfig('statePersistKey'),
  storage,
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      // serializableCheck: {
      //   ignoredActions: ['FLUSH', 'REHYDRATE', 'PAUSE', 'PERSIST', 'PURGE', 'REGISTER']
      // }
    }).concat(...middlewares),
});

setupListeners(store.dispatch);

const persistor = persistStore(store);

// @ts-expect-error
if (isDevelopment() && module.hot) {
  // @ts-expect-error
  module.hot.accept('init/store.rootReducer', () => {
    // This fetches the new state of the above reducers.
    const nextRootReducer = require('init/store.rootReducer').default;
    store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
  });
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export { store, persistor, PersistGate };
export default store;
