
describe('CSS Locators', ()=>{

    it('Login to OrangeHRM', ()=>{

        const username = Cypress.env('username')
        const password = Cypress.env('password')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       
        cy.get("input[placeholder='Username']").type(username)
        cy.get("input[placeholder='Password']").type(password, {log: false}) 
        //cy.wait(1000)
        cy.get("button[type='submit']").click()

    })
})
