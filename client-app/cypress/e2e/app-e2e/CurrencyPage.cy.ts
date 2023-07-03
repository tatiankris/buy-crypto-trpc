describe('Currency E2E', () => {
  before(() => {
    cy.visit('/');
  });
  it('open currency page', () => {
    const ethereum = cy.get('#main table tbody tr').eq(1).should('contain', 'Ethereum')
    ethereum.click()
    cy.url().should('include', '/currencies/ethereum')
  }) ;
  it('add currency to portfolio', () => {
    cy.visit('/currencies/ethereum');
    cy.get('#addCurrency').click()
    cy.url().should('include', '/add')
    cy.get('#inputCurrency').type('1')
    cy.get('#addCurrencyButton').click()
    cy.url().should('not.include', '/add')
    cy.get('#portfolioValue')
    cy.get('#portfolioButton').click()
    cy.url().should('include', '/portfolio')
    cy.get('#portfolioDiv').should('contain', 'Ethereum')
    cy.get('#deleteCurrency').click()
    cy.get('#emptyPortfolioDiv').should('have.text', 'Portfolio is empty')
    cy.get('#closeButton').click()
  });
  it('chart switching', () => {
    cy.visit('/currencies/ethereum');
    cy.get('#year').should('be.checked')
    cy.get('#month').click()
    cy.get('#month').should('be.checked')
    cy.get('#week').click()
    cy.get('#week').should('be.checked')
    cy.get('#year').click()
    cy.get('#year').should('be.checked')
  });
});