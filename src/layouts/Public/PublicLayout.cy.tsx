import { MemoryRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HasReduxStore from '@/viewport/HasReduxStore';
import PublicLayout from '.';

const storeWrappedMount = (WrappedComponent: React.ReactNode, options = {}) => {
  cy.mount(
    <HasReduxStore>
      <ToastContainer />
      <MemoryRouter initialEntries={['/']}>{WrappedComponent}</MemoryRouter>
    </HasReduxStore>,
    options,
  );
};

describe('Protected Layout Components', () => {
  it('mount Protected Layout component', () => {
    storeWrappedMount(<PublicLayout children={<>testing layout</>} />);
  });
});
