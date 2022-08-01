import createproject from "../pages/ProjectPage"

describe('create project', () => {

    beforeEach(function () {
        cy.fixture('project').then(function (p) {
            this["project"] = p
        })
    })

    it('create project', function () {

        createproject.go()
        createproject.fillForm(this["project"].createproject)
        createproject.submit()
        createproject.validCreate()

    })

    it('name invalid', function () {

        createproject.go()
        createproject.fillFormNameInv(this["project"].nameinvalid)
        
        createproject.invalidName()

    })

})