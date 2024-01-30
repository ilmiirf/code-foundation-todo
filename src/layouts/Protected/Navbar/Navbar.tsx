import React from 'react';
import View from './Navbar.view';
import { useAppSelector } from 'helpers/useAppSelector';
import { logout, selectAuth } from 'dataservices/slice/authSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'helpers/useAppDispatch';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);

  const { name } = useAppSelector(selectAuth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    console.log('logout');
    dispatch(logout());
    toast.success('Logout Successfully');
    navigate('/');
  };

  return (
    <View
      toggleIsNavOpen={toggleIsNavOpen}
      isNavOpen={isNavOpen}
      logout={handleLogout}
      name={name}
    />
  );
};

export default Navbar;
