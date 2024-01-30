describe('Fungsionalitas Home Page', () => {
  it('berhasil load', () => {
    cy.visit('/');
  });
  it('berhasil pindah ke page login melalui button login', () => {
    cy.visit('/');
    cy.contains('Login').click();
    cy.url().should('include', '/login');
  });
  it('berhasil pindah ke page login melalui button get start', () => {
    cy.visit('/');
    cy.contains('Get Start').click();
    cy.url().should('include', '/login');
  });
});

describe('Fungsionalitas Login Page', () => {
  it('Berhasil melakukan login', () => {
    cy.visit('/login');
    cy.get('input[name="username"]').type('kminchelle');
    cy.get('input[name="password"]').type('0lelplR');
    cy.get('[data-test="login button"]').click();
    cy.get('.Toastify__toast-body')
      .children()
      .eq(1)
      .should('have.text', 'login successfully');
    cy.url().should('include', '/todo');
  });
  it('Gagal login (invalid credentials)', () => {
    cy.visit('/login');
    cy.get('input[name="username"]').type('kminchellexxx');
    cy.get('input[name="password"]').type('0lelplRkx');
    cy.get('[data-test="login button"]').click();
    cy.get('.Toastify__toast-body')
      .children()
      .eq(1)
      .should('have.text', 'Invalid credentials');
  });
  it('Gagal login (tidak mengisi password)', () => {
    cy.visit('/login');
    cy.get('input[name="username"]').type('kminchellexxx');
    cy.get('[data-test="login button"]').click();
    cy.get('.Toastify__toast-body')
      .children()
      .eq(1)
      .should('have.text', 'please fill all field');
  });
});

describe('Fungsionalitas Todo Page', () => {
  beforeEach(() => {
    cy.login('kminchelle', '0lelplR');
  });
  it('berhasil add todo', () => {
    cy.get('input[name="title"]').type('todo testing cypress');
    cy.contains('Submit').click();
    cy.wait(1000);
    cy.get('#list-todo').should('have.length.at.least', 1);
    cy.get('li').last().should('contain.text', 'todo testing cypress');
  });
  it('berhasil delete todo', () => {
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
    cy.get('li').last().find('#button-check').click();
    cy.get('li')
      .last()
      .find('#todo-title')
      .should('have.class', 'font-semibold', 'line-through');
  });
  it('berhasil update todo', () => {
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

describe('Fungsionalitas Logout', () => {
  it('berhasil logout', () => {
    cy.login('kminchelle', '0lelplR');
    cy.get('button[aria-haspopup="menu"]')
      .click()
      .wait(3000)
      .get('button[role="menuitem"]')
      .contains('Logout')
      .click();
    cy.get('.Toastify__toast-body')
      .children()
      .eq(1)
      .should('have.text', 'Logout Successfully');
  });
});
