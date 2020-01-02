describe('My First Test', function() {
  it('Visit the Kitchen Sink', function() {
      cy.visit('https://example.cypress.io')

      cy.contains('type').click()
      cy.url().should('include', '/commands/actions');
  })
})
