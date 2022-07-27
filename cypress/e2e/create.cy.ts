import createproject from "../pages/CreateProjectPage"

describe('create project', () => {

    beforeEach(function () {
        cy.fixture('project').then(function (p) {
            this.project = p
        })
    })

    it('User create project', function () {

        createproject.go()
        createproject.fillForm(this.project.createproject)
        createproject.submit()
        createproject.valiedCreate()

        //cy.get('td').should('have.text', 'Teste com cypress')


        // cy.get('select option')
        // .as('options')
        // .its('length', { log: false }).then(n => {
        //     cy.get('@options', { log: false }).then($options =>{
        //         const randomOptionsIndex = Cypress._.random(n-1)
        //         const randomOptionsTeam = $options[randomOptionsIndex].innerText
        //         cy.get('select').select(randomOptionsTeam)
        //     })
        // })

        // cy.get('#floatingSelectGrid')
        // .then(($options)=>
        //     Cypress._.map($options, ($option) => $option.innerText),
        // )
        // .invoke('sort')
        // .should('deep.equal', ['one piece', 'naruto', 'barbie', 'barba branca', 'senai', 'crato'])

    })
})