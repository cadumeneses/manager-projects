describe('create project',()=>{
    it('User create project', () => {
        cy.viewport(1920,1280)
        cy.visit('https://manager-projects.vercel.app/projects')

        cy.get('a[href="/projects/new"]').click()
        cy.get('form h2').should('have.text', ' Cadastrar um novo projeto ')

        // var adm ={
        //     projectName: 'Teste com cypress',
        //     team: 'barba branca',
        //     description: 'teste automatizado utilizando a ferramenta Cypress'
        // }

        // cy.get('input[name="projectName"]').type(adm.projectName)
        // cy.get('textarea[formControlName="description"]').type(adm.description)
        // cy.select('option[value="barba branca"]')

        cy.get('#floatingSelectGrid')
        .then(($options)=>
            Cypress._.map($options, ($option) => $option.innerText),
        )
        .then((list)=> list.filter((s)=> s != 'Selecione uma equipe'))
        .invoke('sort')
        .should('deep.equal', ['one piece', 'naruto', 'barbie', 'barba branca', 'senai', 'crato'])

      })
})