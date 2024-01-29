import { type ReactNode } from 'react';
import View from './PublicLayout.view';

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return <View children={children} />;
};

export default PublicLayout;
