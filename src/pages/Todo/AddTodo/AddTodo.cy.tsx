import { mount } from 'cypress/react18';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/init/store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddTodo from './AddTodo';

describe('Todo component', () => {
  beforeEach(() => {
    mount(
      <Provider store={store}>
        <ToastContainer />
        <MemoryRouter initialEntries={['/todo']}>
          <AddTodo />
        </MemoryRouter>
      </Provider>,
    );
  });

  it('berhassil menambhkan todo', () => {
    cy.get('input[name="title"]').type('todo testing cypress');
    cy.get('input[name="title"]').should('have.value', 'todo testing cypress');
    cy.contains('Submit').click();
  });
});
