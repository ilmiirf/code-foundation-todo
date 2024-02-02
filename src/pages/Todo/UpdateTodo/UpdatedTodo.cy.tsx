import { MemoryRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HasReduxStore from '@/viewport/HasReduxStore';
import UpdateTodo from './UpdateTodo';

import { useDispatch } from 'react-redux';
import { toggleInputForm } from 'slice/todoSlice';

const storeWrappedMount = (WrappedComponent: React.ReactNode, options = {}) => {
  cy.mount(
    <HasReduxStore>
      <ToastContainer />
      <MemoryRouter initialEntries={['/todo']}>{WrappedComponent}</MemoryRouter>
    </HasReduxStore>,
    options,
  );
};

const mockTodo = {
  title: 'hello',
  userId: 1,
  isComplete: false,
  id: 1,
};

const dispatch = useDispatch();
const handleUpdate = () => {
  dispatch(toggleInputForm({ mockTodo }));
};

describe('Update Todo Components', () => {
  it('render update todo component', () => {
    handleUpdate();
    storeWrappedMount(<UpdateTodo />);
  });
});
