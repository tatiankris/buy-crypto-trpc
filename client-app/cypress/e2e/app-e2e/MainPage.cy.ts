describe('Main E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('pagination from 1 page to 4 page', () => {
    cy.get('#pagination button').eq(1).click();
    cy.get('#pagination button').last().click();
    cy.get('#pagination button').last().click();
    cy.get('#pagination button').last().click();
  });
  it('open currency page and return to main', () => {
    const bitcoin = cy.get('#main table tbody tr').eq(0).should('contain', 'Bitcoin')
    bitcoin.click()
    cy.url().should('include', 'currencies/bitcoin')
    cy.contains('uyCrypto').click();
    cy.url().should('not.include', '/bitcoin')
  });
  it('open and close portfolio', () => {
    cy.get('#portfolioButton').click()
    cy.url().should('include', '/portfolio')
    cy.get('#closeButton').click()
    cy.url().should('include', '/currencies')
  });
  it('open and close add currency modal', () => {
    cy.get('#main table tbody tr').first().get('#addCurrency').click()
    cy.url().should('include', 'currencies/add')
    cy.get('#closeButton').click()
    cy.url().should('include', '/currencies')
  });
  it('add currency to portfolio and delete', () => {
    cy.get('#main table tbody tr').first().get('#addCurrency').click()
    cy.url().should('include', 'currencies/add')
    cy.get('#inputCurrency').type('0.02')
    cy.get('#inputCurrency').should('have.value', '0.02')
    cy.get('#addCurrencyButton').click()
    cy.url().should('not.include', '/add')
    cy.get('#portfolioValue')
    cy.get('#portfolioButton').click()
    cy.url().should('include', '/portfolio')
    cy.get('#deleteCurrency').click()
    cy.get('#emptyPortfolioDiv').should('have.text', 'Portfolio is empty')
    cy.get('#closeButton').click()
    cy.url().should('include', '/currencies')
  });
  it('open pages of top currencies', () => {
    cy.get('#topCryptoBox div').eq(0).click();
    cy.url().should('include', '/bitcoin')
    cy.get('#topCryptoBox div').eq(1).click();
    cy.url().should('include', '/ethereum')
    cy.get('#topCryptoBox div').eq(2).click();
    cy.url().should('include', '/tether')
  });
});