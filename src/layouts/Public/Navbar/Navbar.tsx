import { useNavigate } from 'react-router-dom';
import View from './Navbar.view';

const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/login');
  };
  return <View navigate={handleNavigate} />;
};

export default Navbar;
