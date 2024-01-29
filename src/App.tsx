import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'init/i18n';
import HasReduxStore from 'viewport/HasReduxStore';
import Scene from 'viewport/Scene';
import HasPermission from 'viewport/HasPermission';

const App = () => {
  return (
    <HasReduxStore>
      <HasPermission />
      <ToastContainer />
      <Scene />
    </HasReduxStore>
  );
};

export default App;
