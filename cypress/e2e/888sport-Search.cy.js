

describe('888 Test suite', ()=> {

    it('888 Test case', ()=> {

        cy.visit('http://www.888sport.com') // Open the 888sport.com
        cy.wait(5000)
        cy.xpath("(//div[@id='search'])[1]").click() // Click on Search
        cy.wait(5000)
        cy.get('[data-testid="search-widget__input"]').type('football') // Search for Football
        cy.get("div[data-testid='sport-suggestion']").should('have.length',3) // Verifying there are 3 sports which have football name in it i.e Football, American Football, GAA Football
        cy.get("div[data-testid='sport-suggestion']").each(($el, index, $list) =>{

            if($el.text()=='Football') 
            {
                cy.wrap($el).click()
            }
        })
        cy.get('.bb-breadcrumbs__levelTwo__text').contains('Football') // Confirming if the homepage is of Football

        cy.get(".carousel__item[data-item-slug='competitions']").click() // Clicking on Competitions

       cy.xpath("//span[@id='319670']").should('contain','England Premier League').click() //Clicking on the England Premier League Competition
       cy.get("button[data-item-slug='matches']").should('be.visible')

        


    })
})