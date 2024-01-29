import { mount } from 'cypress/react18';
import Login from './Login';

describe('Login Component Tests', () => {
  it('should handle successful login', () => {
    // Stub the useLoginMutation hook to simulate a successful login
    cy.stub(Login.prototype, 'loginUser').resolves({
      data: {
        token: 'mocked-token',
        username: 'mocked-username',
      },
      isSuccess: true,
    });

    // Mount the component
    mount(<Login />);

    // Interact with the form
    cy.get('[name="username"]').type('testuser');
    cy.get('[name="password"]').type('testpassword');
    cy.get('button[type="submit"]').click();

    // Assertions
    cy.contains('login successfully').should('exist');
    cy.window()
      .its('toast.success')
      .should('have.been.calledWith', 'login successfully');
    cy.window()
      .its('dispatch')
      .should('have.been.calledWithMatch', {
        type: 'auth/setUser',
        payload: {
          token: 'mocked-token',
          name: 'mocked-username',
        },
      });
    cy.window().its('navigate').should('have.been.calledWith', '/todo');
  });

  it('should handle login error', () => {
    // Stub the useLoginMutation hook to simulate a login error
    cy.stub(Login.prototype, 'loginUser').rejects({
      isError: true,
      error: {
        data: {
          message: 'Login failed. Invalid credentials.',
        },
      },
    });

    // Mount the component
    mount(<Login />);

    // Interact with the form
    cy.get('[name="username"]').type('invaliduser');
    cy.get('[name="password"]').type('invalidpassword');
    cy.get('button[type="submit"]').click();

    // Assertions
    cy.contains('Login failed. Invalid credentials.').should('exist');
    cy.window()
      .its('toast.error')
      .should('have.been.calledWith', 'Login failed. Invalid credentials.');
  });
});
