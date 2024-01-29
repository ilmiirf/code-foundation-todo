import { useSelector } from 'react-redux';
import { selectAuth } from 'slice/authSlice';
import ProtectedLayout from 'layouts/Protected';
import PublicLayout from 'layouts/Public';

const HasLayout = ({ children }: { children: any }) => {
  const { token } = useSelector(selectAuth);
  if (token) {
    return <ProtectedLayout>{children}</ProtectedLayout>;
  } else {
    return <PublicLayout>{children}</PublicLayout>;
  }
};

export default HasLayout;
