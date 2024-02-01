import { MemoryRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HasReduxStore from '@/viewport/HasReduxStore';
import UpdateTodo from './UpdateTodo';

const storeWrappedMount = (WrappedComponent: React.ReactNode, options = {}) =>
  cy.mount(
    <HasReduxStore>
      <ToastContainer />
      <MemoryRouter initialEntries={['/todo']}>{WrappedComponent}</MemoryRouter>
    </HasReduxStore>,
    options,
  );

describe('Update Todo Components', () => {
  it('render update todo component', () => {
    storeWrappedMount(<UpdateTodo />);
  });
});
