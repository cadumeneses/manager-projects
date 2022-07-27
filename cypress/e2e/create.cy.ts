describe('create project',()=>{
    it('User create project', () => {
        


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

          
        

        cy.get('td').should('have.text', 'Teste com cypress')


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