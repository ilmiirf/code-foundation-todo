import { mount } from 'cypress/react18';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/init/store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

describe('Login component', () => {
  beforeEach(() => {
    mount(
      <Provider store={store}>
        <ToastContainer />
        <MemoryRouter initialEntries={['/login']}>
          <Login />
        </MemoryRouter>
      </Provider>,
    );
  });

  it('render Login component dan ubah inputan username password', () => {
    cy.get('input[name="username"]').type('kminchelle');
    cy.get('input[name="password"]').type('0lelplR');

    cy.get('input[name="username"]').should('have.value', 'kminchelle');
    cy.get('input[name="password"]').should('have.value', '0lelplR');

    cy.get('[data-test="login button"]').click();
  });
});
