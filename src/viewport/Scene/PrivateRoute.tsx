import { selectAuth } from 'slice/authSlice';
import { useSelector } from 'react-redux';
import LoadingToDirect from 'viewport/page/LoadingToDirect';
import { type ReactNode } from 'react';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { token } = useSelector(selectAuth);
  return token ? children : <LoadingToDirect />;
};

export default PrivateRoute;
