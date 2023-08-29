
describe('CSS Locators', ()=>{

    it('Login to 888', ()=>{

        const username = Cypress.env('username')
        const password = Cypress.env('password')

        cy.visit('http://www.888sport.com')
        cy.get('[data-testid="topMenuaCloginButton"]').click()
       
        cy.get('input#rlLoginUsername').type(username)
        cy.get('input#rlLoginPassword').type(password, {log: false}) 
        cy.get('button#rlLoginSubmit').click()
        cy.get('#onetrust-accept-btn-handler').click()
    })
})
