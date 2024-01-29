import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import View from './NotFound.view';

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return <View onBack={handleBack} />;
};

export default PageNotFound;
