class CreateProjectPage{

    go(){
        cy.viewport(1920,1280)
        cy.visit('https://manager-projects.vercel.app/projects')

        cy.get('a[href="/projects/new"]').click()
        cy.get('form h2').should('have.text', ' Cadastrar um novo projeto ')
    }

    goUpdate(){
        cy.viewport(1920,1280)
        cy.visit('https://manager-projects.vercel.app/projects')

        cy.get('a[href="/projects/info/12"]').click()
        cy.get('form h2').should('have.text', ' Dia 28 ')
    }

    fillForm(project: any){
        cy.get('input[name="projectName"]').type(project.projectName)
        cy.get('textarea[formControlName="description"]').type(project.description)
        cy.get('select').select(project.team)

        cy.get('#btnAddTask').click()
        cy.get('#task0').type(project.tasks.taskName)
        cy.get('#taskMember0').select(project.tasks.member)

        cy.get('#btnAddTask').click()
        cy.get('#task1').type(project.tasks.taskName1)
        cy.get('#taskMember1').select(project.tasks.member1)
    }

    fillFormNameInv(project: any){
        cy.get('input[name="projectName"]')
        .focus()
        .blur()

        cy.get('textarea[formControlName="description"]').type(project.description)
        cy.get('select').select(project.team)

        cy.get('#btnAddTask').click()
        cy.get('#task0').type(project.tasks.taskName)
        cy.get('#taskMember0').select(project.tasks.member)

        cy.get('#btnAddTask').click()
        cy.get('#task1').type(project.tasks.taskName1)
        cy.get('#taskMember1').select(project.tasks.member1)
    }

    fillUpdateForm(project: any){
        cy.get('input[name="projectName"]').clear()
        .type(project.projectName)

        cy.get('textarea[formcontrolname="description"]').clear()
        .type(project.description)

        cy.get('input[name="team"]').clear()
        .type(project.team)
    }

    submit(){
        cy.get('button.btn.btn-success').click()
    }

    valiedCreate(){
        cy.reload(true)
        cy.get(':nth-child(8) > :nth-child(1)').should('have.text', 'Teste Com Cypress')
    }

    validUpdate(){
        cy.reload()
        cy.contains('Test Of Project Update With Cypress')
    }

    invalidName(){
        cy.get('span.invalid').should('have.text', 'Informar nome de projeto v??lido! ex: Landing Page.')
    }

}

export default new CreateProjectPage;