describe('UI Elements', ()=>{
    it('Checking Radio Buttons', ()=>
    {
      cy.visit('https://itera-qa.azurewebsites.net/home/automation')
      cy.get('input#male').should('be.visible')
      cy.get('input#female').should('be.visible')

      cy.get('input#male').check().should('be.checked')
      cy.get('input#female').should('not.be.checked')
    })
})

it('Checking Checkboxes', ()=>
{
  cy.visit('https://itera-qa.azurewebsites.net/home/automation')
  cy.get('input#monday').should('be.visible')


  cy.get('input#monday').check().should('be.checked')
  cy.get('input#monday').uncheck().should('not.be.checked')

  cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')
  cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')

  cy.get('input.form-check-input[type="checkbox"]').first().check()
  cy.get('input.form-check-input[type="checkbox"]').last().check()
})

  it('Checking Checkboxes', ()=>
{
  cy.visit('http://rahulshettyacademy.com/AutomationPractice/')
  cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
  cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
  cy.get('input[type="checkbox"]').check(['option1','option3'])
})