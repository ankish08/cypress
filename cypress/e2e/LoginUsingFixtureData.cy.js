describe('Automation Using Cypress || Fixtures', ()=> {
    let data
    before(()  => {
    cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
    cy.fixture('login').then((value) => {
        data = value
    })
})
    it('Login into the application using fixture data', ()=> {

        cy.get('input[name="email"]').type(data.email)
        cy.get('input[name="password"]').type(data.password)

        cy.get('input[type="submit"]').click()

    }
    )
}
)