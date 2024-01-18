describe('Dropdown Test suite', ()=> {
    it('Dropdowns with select', ()=> {

        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        cy.get('#zcf_address_country').select('India').should('have.value', 'India')
    })

    it('Dropdown without select', () => {

        cy.visit('http://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Ireland').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Ireland')
    })

    it('Auto suggest Dropdown', () => {

        cy.visit('http://www.wikipedia.org')
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click()
    })

    it('Dynamic Dropdown', () => {

        cy.visit('http://www.wikipedia.org')
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click()
    })

    it.only('Dynamic Dropdown', () => {

        cy.visit('http://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('us')
        cy.get('.ui-menu-item-wrapper').each(($el, index, $list) => {

            if($el.text()=='Cyprus')
            {
                $el.click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'Cyprus')       
    })    
})
