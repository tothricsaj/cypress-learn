describe('The home page', () => {
    it('succesfully loads', () => {
        cy.visit('http://localhost:8080/index.html')
    })
})
