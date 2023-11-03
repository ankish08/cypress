describe('CSS Locators', () =>{
    it('csslocators', ()=> {

        cy.visit('https://rahulshettyacademy.com/dropdownsPractise/')
        cy.get('#ctl00_mainContent_ddl_originStation1_CTXT').click() //id tag is optional here
        //cy.get('.paxinfo').click() //class tag is optional here
        //cy.get("[name='ctl00$mainContent$view_date1']").click() // attribute tag is optional here  

    })
})