describe('create project',()=>{
    it('User create project', () => {
        cy.viewport(1920,1280)
        cy.visit('https://manager-projects.vercel.app/projects')

        cy.get('a[href="/projects/new"]').click()
        cy.get('form h2').should('have.text', ' Cadastrar um novo projeto ')

        var adm ={
            projectName: 'Teste com cypress',
            team: 'barba branca',
            description: 'teste automatizado utilizando a ferramenta Cypress',
            tasks: {
                taskName: 'primeira tarefa testando com cypress',
                member: 'caio',            
                taskName1: 'cypress second',
                member1: 'andre'
            }
            

        }

        cy.get('input[name="projectName"]').type(adm.projectName)
        cy.get('textarea[formControlName="description"]').type(adm.description)
        cy.get('select').select(adm.team)

        cy.get('#btnAddTask').click()
        cy.get('#task0').type(adm.tasks.taskName)
        cy.get('select[formControlName="member"]')      


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