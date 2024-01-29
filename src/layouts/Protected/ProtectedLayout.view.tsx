import { type ReactNode } from 'react';
import Navbar from './Navbar';

const View = ({ children }: { children: ReactNode }) => (
  <>
    <Navbar />
    <div>{children}</div>
  </>
);

export default View;
