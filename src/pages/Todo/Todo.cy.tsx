import { MemoryRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HasReduxStore from '@/viewport/HasReduxStore';
import TodoPage from './Todo';

const storeWrappedMount = (WrappedComponent: React.ReactNode, options = {}) =>
  cy.mount(
    <HasReduxStore>
      <ToastContainer />
      <MemoryRouter initialEntries={['/todo']}>{WrappedComponent}</MemoryRouter>
    </HasReduxStore>,
    options,
  );

describe('Todo component', () => {
  // it('verify the request returns the correct status code', () => {
  //   cy.request('http://localhost:3000/todos')
  //     .its('status')
  //     .should('be.equal', 200);
  // });
  it('render todo component dan jalankan action todo', () => {
    cy.intercept(
      {
        method: 'GET',
        pathname: '/todos',
      },
      { fixture: 'db_mock.json', delay: 100 },
    ).as('getTodos');
    storeWrappedMount(<TodoPage />);
  });
  it('berhasil add todo', () => {
    storeWrappedMount(<TodoPage />);
    cy.get('input[name="title"]').type('todo testing cypress');
    cy.contains('Submit').click();
    cy.wait(1000);
    cy.get('#list-todo').should('have.length.at.least', 1);
    cy.get('li').last().should('contain.text', 'todo testing cypress');
  });
  it('berhasil delete todo', () => {
    storeWrappedMount(<TodoPage />);
    cy.get('input[name="title"]').type('todo testing cypress delete');
    cy.contains('Submit').click();
    cy.wait(1000);
    cy.get('li').last().should('contain.text', 'todo testing cypress delete');
    cy.get('li').last().find('#button-delete').click();
    cy.wait(1000);
    cy.get('#todo-item').should(
      'not.include.text',
      'todo testing cypress delete',
    );
  });
  it('berhasil ceklis todo (done)', () => {
    storeWrappedMount(<TodoPage />);
    cy.get('li').last().find('#button-check').click();
    cy.get('li')
      .last()
      .find('#todo-title')
      .should('have.class', 'font-semibold', 'line-through');
  });
});
