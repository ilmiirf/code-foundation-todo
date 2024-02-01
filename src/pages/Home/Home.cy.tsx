import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import { mount } from 'cypress/react18';

describe('Home component', () => {
  it('renders Home component', () => {
    cy.intercept('GET', '/api/todos', {
      statusCode: 200,
      body: [],
    }).as('getTodos');

    mount(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>,
    );

    cy.contains('Code Foundation React Web App').should('be.visible');
    cy.contains(
      'React + Vite + Typescript + Redux Toolkit (RTK Query) + tailwind CSS + i18n',
    ).should('be.visible');

    cy.contains('Get Start').click();
  });
});
