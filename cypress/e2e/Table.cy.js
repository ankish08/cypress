describe('Handling tables', ()=> {

    beforeEach('Login', ()=> {

        cy.visit('http://demo.opencart.com/admin/index.php')
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get("button[type='submit']").click()

        cy.get('.btn-close').click()

        //Customers-> Customers

        cy.get('#menu-customer>a').click() //customers main menu
        cy.get('#menu-customer>ul>li:first-child').click() //customers sub/child item

    })

        it.skip('Check No. of rows and columns', ()=> {

            cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', 10)
            cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', 7)
        })

        it.skip('Check cell data from specific row and column', ()=> {

            cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").contains('princytrainings4@gmail.com')
           
        })

        it('Read all the row and column in the first page', ()=> {

            cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each ( ($row, index, $rows)=> {

                cy.wrap($row).within(()=> {

                    cy.get("td").each( ($col, index, $cols) =>{

                    cy.log($col.text()) 
                    })
                })
            })
           
        })

        it.skip('Pagination', ()=> {

            //Find total number of pages
            cy.get()
        })

    })
