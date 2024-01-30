describe('Flow App', () => {
  it('aplikasi berjalan sesuai flow', () => {
    cy.visit('/');
    cy.contains('Login').click();
    cy.url().should('include', '/login');
    // login
    cy.get('input[name="username"]').type('kminchelle');
    cy.get('input[name="password"]').type('0lelplR');
    cy.get('[data-test="login button"]').click();
    cy.get('.Toastify__toast-body')
      .children()
      .eq(1)
      .should('have.text', 'login successfully');
    cy.url().should('include', '/todo');
    // add todo
    cy.get('input[name="title"]').type('todo testing cypress');
    cy.contains('Submit').click();
    cy.wait(1000);
    cy.get('#list-todo').should('have.length.at.least', 1);
    cy.get('li').last().should('contain.text', 'todo testing cypress');
    // delete todo
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
    // checklis todo
    cy.get('li').last().find('#button-check').click();
    cy.get('li')
      .last()
      .find('#todo-title')
      .should('have.class', 'font-semibold', 'line-through');
    // update todo
    cy.get('input[name="title"]').type('todo testing cypress sebelum update');
    cy.contains('Submit').click();
    cy.wait(1000);
    cy.get('li').last().find('#button-edit').click();
    cy.get('input[name="title"]')
      .clear()
      .type('todo testing cypress setelah update');
    cy.get('#submit-update').click();
    cy.wait(1000);
    cy.get('li')
      .last()
      .should('contain.text', 'todo testing cypress setelah update');
  });
});
