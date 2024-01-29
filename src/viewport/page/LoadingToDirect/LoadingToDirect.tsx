import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import View from './LoadingToDirect.view';

const LoadingToDirect = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount - 1);
    }, 1000);
    count === 0 && navigate('/login');
    return () => clearInterval(interval);
  }, [count, navigate]);

  return <View count={count} />;
};

export default LoadingToDirect;
