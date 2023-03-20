

describe('888 Test suite', ()=> {

    it('888 Test case', ()=> {

        cy.visit('http://www.888sport.com')
        cy.wait(5000)
        cy.xpath("(//div[@id='search'])[1]").click()
        cy.wait(5000)
        cy.get('[data-testid="search-widget__input"]').type('football')
        cy.get("div[data-testid='sport-suggestion']").should('have.length',3)
        cy.get("div[data-testid='sport-suggestion']").each(($el, index, $list) =>{

            if($el.text()=='Football')
            {
                cy.wrap($el).click()
            }
        })
        cy.get('.bb-breadcrumbs__levelTwo__text').contains('Football')

    })
})