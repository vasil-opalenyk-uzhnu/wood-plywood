describe('starter app', () => {
  it('loads the SPA and increments the counter', () => {
    cy.visit('/');

    cy.contains('h1', 'Get started').should('be.visible');
    cy.contains('button', 'Count is 0').click().click();
    cy.contains('button', 'Count is 2').should('be.visible');
  });
});
