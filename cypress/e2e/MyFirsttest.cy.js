describe('My First test', () => 
{
    it('Verify Title Positive', () =>
    {
      cy.visit("http://www.888sport.com/football/")

      cy.title().should('eq','Football Betting & Football Odds › 888sport')
    })

    it('verify title negative', () =>
    {
        cy.visit('http://www.888sport.com/football/')

        cy.title().should('eq', 'Tennis Betting & Football Odds › 888sport')
    })

})