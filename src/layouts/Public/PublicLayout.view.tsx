import { type ReactNode } from 'react';
import Navbar from './Navbar';

const View = ({ children }: { children: ReactNode }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default View;
