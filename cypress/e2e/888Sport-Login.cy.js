
describe('CSS Locators', ()=>{

    it('Login to 888', ()=>{

        const username = Cypress.env('username')
        const password = Cypress.env('password')

        cy.visit('http://www.888sport.com')
        cy.get('a#topMenuaCloginButton').click()
        cy.get('input#rlLoginUsername').type(username)
        cy.get('input#rlLoginPassword').type(password, {log: false})
        cy.get('button#rlLoginSubmit').click()
        
        cy.get(".iconsCarousel__link[href='/tennis/']").click()
        
    })
})