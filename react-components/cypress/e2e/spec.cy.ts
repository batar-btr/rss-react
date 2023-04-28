describe('My First Test', () => {
  it('Visits Home Page', () => {
    cy.visit('/');
    cy.get('img').should('have.length', 10);
  });

  it('Check About Page', () => {
    cy.visit('/about-us');
    cy.get('header').contains('h1', 'ABOUT-US PAGE');
  });

  it('Check Forms Page', () => {
    cy.visit('/forms');
    cy.get('header').contains('h1', 'FORMS PAGE');
  });

  it('Check 404 Page', () => {
    cy.visit('/ghjgkjgjh');
    cy.get('header').contains('h1', 'PAGE NOT FOUND');
  });

  it('Check load new img', () => {
    cy.visit('/');
    cy.get('input').type('forest').trigger('input');
    cy.get('form').submit();
    cy.get('img').should('have.length', 10);
  });
});

describe('Check modal box', () => {
  it('Open modal', () => {
    cy.visit('/');
    cy.get('.img-card:first').click();
    cy.get('.modal-overlay').should('exist');
    cy.get('.img-info').should('exist');
  });
});

describe('Test Forms - Card creates', () => {
  it('Visit the forms page', () => {
    cy.visit('/forms');
    cy.get("[name='name']").type('Valtz');
    cy.get("[name='date']").type('2020-02-20');
    cy.get("[name='country']").select('USA');
    cy.get("[for='js']").click();
    cy.get('#male').click();
    cy.get("[name='file']").selectFile('cypress/fixtures/test_photo.jpg');
    cy.get('form').submit();
    cy.wait(4000);
    cy.get("[data-testid='user-card']").should('exist');
  });

  it('Test case', () => {
    expect(true).to.equal(true);
  });
});
