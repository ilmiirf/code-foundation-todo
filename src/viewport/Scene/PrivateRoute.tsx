import { selectAuth } from 'slice/authSlice';
import { useSelector } from 'react-redux';
import LoadingToDirect from 'viewport/page/LoadingToDirect';

const PrivateRoute = ({ children }: { children: any }) => {
  const { token } = useSelector(selectAuth);
  return token ? children : <LoadingToDirect />;
};

export default PrivateRoute;
