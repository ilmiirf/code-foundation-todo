import { t } from 'i18next';

describe('Home Component Tests', () => {
  beforeEach(() => {
    cy.visit('/'); // Assuming your Home component is rendered at the root path
  });

  it('should navigate to login page on button click', () => {
    // Interact with the button
    cy.get('button').click();

    // Assertions
    cy.url().should('include', '/login');
  });

  it('should display correct text content', () => {
    // Assertions for text content
    cy.contains(t('trans-start.title')).should('exist');
    cy.contains(t('trans-start.description1')).should('exist');
    cy.contains(t('trans-start.description2')).should('exist');
    cy.contains(t('trans-start.get-start')).should('exist');
  });
});
