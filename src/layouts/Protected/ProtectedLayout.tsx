import { type ReactNode } from 'react';
import View from './ProtectedLayout.view';

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  return <View children={children} />;
};

export default ProtectedLayout;
