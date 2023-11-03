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

        it('Check No. of rows and columns', ()=> {

            cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', 10)
            cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', 7)
        })

        it('Check cell data from specific row and column', ()=> {

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

        it('Pagination', ()=> {
            
            
            //Find total number of pages
            let totalPages
            cy.get(".col-sm-6.text-end").then( (e) => {
                let text = e.text(); // Showing 1 to 10 of 5581 (559 Pages)
                totalPages= text.substring(text.indexOf('(')+1, text.indexOf('Pages')-1 )
                cy.log('Total number pf pages in a table=====>'+totalPages)

            })
        })

    })
