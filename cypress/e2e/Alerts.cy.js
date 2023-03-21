
describe('Alerts', ()=> {
    it(' JS Alerts', ()=> 
    {
      cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
      cy.get("button[onclick='jsAlert()']").click()

      cy.on('window:alert',(t)=>{
        expect(t).to.contains('I am a JS Alert')
      })

      //alert window automatically closed by cypress

      cy.get('#result').should('have.text','You successfully clicked an alert')

    })
    it(' JS Confirm Alerts - OK', ()=> 
    {
      cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
      cy.get("button[onclick='jsConfirm()']").click()

      cy.on('window:confirm',(t)=>{
        expect(t).to.contains('I am a JS Confirm')
      })

      //alert window automatically closed by cypress

      cy.get('#result').should('have.text','You clicked: Ok')

    })
    it(' JS Confirm Alerts - Cancel', ()=> 
    {
      cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
      cy.get("button[onclick='jsConfirm()']").click()

      cy.on('window:confirm',(t)=>{
        expect(t).to.contains('I am a JS Confirm')
      })

      cy.on('window:confirm',()=> false) //Cypress closes alert window using cancel button

      //alert window automatically closed by cypress

      cy.get('#result').should('have.text','You clicked: Cancel') 

    })
    it(' JS Prompt Alerts', ()=> 
    {
      cy.visitss('http://the-internet.herokuapp.com/javascript_alerts')

      cy.window().then((win) =>{
        cy.stub(win,'prompt').returns('welcome')

      })
      cy.get("button[onclick='jsPrompt()']").click()

      //alert window automatically closed by cypress

      cy.get('#result').should('have.text','You entered: welcome') 

    })
    it('Authenticated Alert', ()=> 
    {
      cy.visit('http://admin:admin@the-internet.herokuapp.com/basic_auth')

      cy.get("div[class='example'] p").should('have.contain', "Congratulations")


    })



 })