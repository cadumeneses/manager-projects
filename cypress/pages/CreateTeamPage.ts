class CreateTeamPage{

    go(){
        cy.viewport(1920, 1080)
        cy.visit('https://manager-projects.vercel.app/teams/new')

        cy.get('a[href="/teams"]')
        cy.get('form h2').should('have.text',' Cadastrar uma nova equipe ')
    }

    fillForm(team: any){
        cy.get('input[name="teamName"]').type(team.teamName)

        cy.get('div.btn').click()
        cy.get('#member0').type(team.members.nameMember)

        cy.get('div.btn').click()
        cy.get('#member1').type(team.members.nameMember1)

        cy.get('div.btn').click()
        cy.get('#member2').type(team.members.nameMember2)

        cy.get('div.btn').click()
        cy.get('#member3').type(team.members.nameMember3)
    }

    submit(){
        cy.get('button.btn.btn-success').click()
    }

    validCreate(){
        cy.reload(true)
        cy.get(':nth-child(8) > :nth-child(1)').should('have.text', 'Teste De Cadastro De Equipe')
    }

}

export default new CreateTeamPage;