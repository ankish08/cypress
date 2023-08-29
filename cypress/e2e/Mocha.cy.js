
before(function () {
    cy.log('-----Before 1st Test Case---')
})

after(function () {
    cy.log('-----After last Test Case---')
})

describe('Test Suite 1', ()=>{


    it('Test Suite 1 - TC1', ()=>{

        cy.log('This is my 1st Suite 1 TC')

    })

    it('Test Suite 1 - TC2', ()=>{

        cy.log('This is my 1st Suite 2 TC')

    })
})

describe('Test Suite 2', ()=>{

    it('Test Suite 2 - TC1', ()=>{

        cy.log('This is my 2nd Suite 1 TC')

    })

    it('Test Suite 2 - TC2', ()=>{

        cy.log('This is my 2nd Suite 2 TC')

    })
})