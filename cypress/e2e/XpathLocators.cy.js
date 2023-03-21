describe.skip('XpathLocators', ()=>{
    it.skip('Find no. of products', ()=>{

        cy.visit('https://rahulshettyacademy.com/')
        cy.xpath(" (//a[normalize-space()='Courses'])[1]").click()
        cy.xpath(" (//div[@class='row course-list list']/div").should('have.length',36 )
    })
})