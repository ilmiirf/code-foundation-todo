import View from './Home.view';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/login');
  };
  return <View navigate={handleNavigate} />;
};

export default Home;
