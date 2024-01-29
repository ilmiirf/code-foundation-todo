describe('Test Fungsi Login ', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('input[name="username"]').type('kminchelle');
    cy.get('input[name="password"]').type('0lelplR');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/todo');
  });
});
