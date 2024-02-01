import { MemoryRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HasReduxStore from '@/viewport/HasReduxStore';
import SingleTodoCardView from './SingleTodoCard';

const storeWrappedMount = (WrappedComponent: React.ReactNode, options = {}) =>
  cy.mount(
    <HasReduxStore>
      <ToastContainer />
      <MemoryRouter initialEntries={['/todo']}>{WrappedComponent}</MemoryRouter>
    </HasReduxStore>,
    options,
  );

const mockTodo = {
  title: 'hello',
  userId: 1,
  isComplete: false,
  id: 1,
};

describe('Single Todo Card Component', () => {
  it('mount component', () => {
    storeWrappedMount(<SingleTodoCardView todo={mockTodo} />);
  });
  it('berhasil ceklis todo (done)', () => {
    storeWrappedMount(<SingleTodoCardView todo={mockTodo} />);
    cy.get('#button-check').click();
    cy.get('#todo-title').should('have.class', 'font-semibold', 'line-through');
  });
});
