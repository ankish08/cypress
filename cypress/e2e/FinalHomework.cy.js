describe('Final Homework', ()=>{

    it('Final Homework', () => {

        //Open Website    
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        
        //Confirm the Title of the page is XYZ BAnk
        cy.title().should('include','XYZ Bank')
        
        //Click on Customer Login
        cy.get("button[ng-click='customer()']").click()
        
        //Choose any Name from the Your Name drop down
        cy.get('#userSelect').select('Albus Dumbledore')
        
        //Click on Login
        cy.get("button[type='submit']").click()
        
        //Write an assertion to confirm the Name selected in Step 4 is displayed after Welcome
        let expName='Albus Dumbledore'
        cy.get('.fontBig.ng-binding').then((x)=>{
            let actName = x.text()

            expect(actName).to.equal(expName)

            assert.equal(actName,expName)
    })
        
        //Confirm the Currency is Dollar (Use Assertion)
        let expCurrency='Dollar'
        cy.get('strong:nth-child(3)').then((x)=>{
            let actCurrency = x.text()

            expect(actCurrency).to.equal(expCurrency)

            assert.equal(actCurrency,expCurrency)
        })

        //Click on Transactions
        cy.get(".btn.btn-lg.tab[ng-class='btnClass1']").click()

        //Click on Reset
        cy.get(".btn[ng-show='showDate']").click({force: true})

        //Click on Back
        cy.get("button[ng-click='back()']").click()
        
        //Click on Deposit
        cy.get(".btn.btn-lg.tab[ng-class='btnClass2']").click()
        
        //Enter the amount in Amount to be Deposited textbox
        cy.get("input[placeholder='amount']").type('2222')
        
        //Click on Deposit
        cy.get("button[type='submit']").click()
        
        //Confirm "Deposit Successful" is displayed
        let expStatus='Deposit Successful'
        cy.get('.error.ng-binding').then((x)=>{
            let actStatus = x.text()

            expect(actStatus).to.equal(expStatus)

            assert.equal(actStatus,expStatus)
        })

        //Click on Transactions
        cy.get(".btn.btn-lg.tab[ng-class='btnClass1']").click()
        cy.wait(2000)
        cy.get("button[ng-click='back()']").click()

        cy.get(".btn.btn-lg.tab[ng-class='btnClass1']").click()

        //Confirm the amount entered in Step 9 is displayed under Amount column
        
        //cy.contains('tr', 'Amount').contains('td', '2222', {timeout:5000})
        cy.contains('tbody tr:nth-of-type(1) td:nth-of-type(2)', '2222')
        //cy.get('table tbody:nth-child(2)').should('have.value', '2222')
        cy.get('tbody td:nth-child(2)').contains('td','2222')
        cy.get('tr td:nth-child(2)').should('be.visible').contains('2222')

      

        //Confirm the Transaction Type is credit
       cy.contains('tr', 'Transaction Type')
        //cy.contains('tr', 'Transaction Type').contains('td', 'Credit')
        cy.contains('td', 'Credit')
        
        //cy.get("tr:nth-child(1) td:nth-child(3)").invoke('text').should('equal', 'Credit')
        cy.get('table').contains("Credit")
        
        //Click on Back button
       cy.get("button[ng-click='back()']").click()

        //Click on Withdrawl
        cy.get(".btn.btn-lg.tab[ng-class='btnClass3']").click()

        //Enter the same amount you deposited
       cy.get("input[placeholder='amount']").type('2222')

        //Click on Withdraw
       cy.get("button[type='submit']").click()

        //Confirm "Transaction Successful" is displayed
       let expStatus1='Transaction successful'
       cy.get('.error.ng-binding').then((x)=>{
           let actStatus1 = x.text()

           expect(actStatus1).to.equal(expStatus1)

           assert.equal(actStatus1,expStatus1)
       })

        //Click on Transactions
        cy.get(".btn.btn-lg.tab[ng-class='btnClass1']").click()

        //Click on Back button
       cy.get("button[ng-click='back()']").click()

       //Click on Transactions
       cy.get(".btn.btn-lg.tab[ng-class='btnClass1']").click()

        //Confirm there is one more row with Transaction Type is debit
        //cy.contains('tbody tr:nth-of-type(2) td:nth-of-type(3)','Debit',{timeout:30000})
        
        cy.contains('td', 'Debit')
        /*let expText='Debit'
        cy.get("tr[id='anchor1'] td:nth-child(3)").then((x)=>{
            let actText = x.text()

            expect(actText).to.equal(expText)

            assert.equal(actText,expText)
        })
        
        cy.get("tr td:nth-child(3)").contains("Debit") */
    })
})



