import { useSelector } from 'react-redux';
import { selectAuth } from 'slice/authSlice';
import ProtectedLayout from 'layouts/Protected';
import PublicLayout from 'layouts/Public';
import { type ReactNode } from 'react';

const HasLayout = ({ children }: { children: ReactNode }) => {
  const { token } = useSelector(selectAuth);
  if (token) {
    return <ProtectedLayout>{children}</ProtectedLayout>;
  } else {
    return <PublicLayout>{children}</PublicLayout>;
  }
};

export default HasLayout;
