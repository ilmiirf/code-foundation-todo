import View from './Login.view';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch } from 'helpers/useAppDispatch';
import { setUser } from 'slice/authSlice';
import { useLoginMutation } from 'api/authApi';

const Login = () => {
  const initialState = {
    name: '',
    username: '',
    password: '',
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formValue, setFormValue] = useState(initialState);

  const { username, password } = formValue;

  const [loginUser, { data: loginData, isSuccess, isError }] =
    useLoginMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    username && password
      ? await loginUser({ username, password })
      : toast.error('please fill all field');
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('login successfully');
      dispatch(setUser({ token: loginData.token, name: loginData.username }));
      navigate('/todo');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error('Invalid credentials');
    }
  }, [isError]);

  return (
    <View
      username={username}
      password={password}
      handleChange={handleChange}
      handleLogin={handleLogin}
    />
  );
};

export default Login;
