import { useAppDispatch } from 'helpers/useAppDispatch';
import { useEffect } from 'react';
import { setUser } from 'dataservices/slice/authSlice';

const HasPermission = () => {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem('user') ?? '{}');

  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return null;
};

export default HasPermission;
