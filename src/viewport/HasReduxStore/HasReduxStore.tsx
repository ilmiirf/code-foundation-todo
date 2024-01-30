import { Provider as ReduxProvider } from 'react-redux';
import store from 'init/store/store';
import { type ReactNode } from 'react';

const HasReduxStore = ({ children }: { children: ReactNode }) => (
  <ReduxProvider store={store}>{children}</ReduxProvider>
);

export default HasReduxStore;
