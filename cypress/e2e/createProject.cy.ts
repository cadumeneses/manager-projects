import createproject from "../pages/CreateProjectPage"

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
        createproject.valiedCreate()

    })

    it('name invalid', function () {

        createproject.go()
        createproject.fillFormNameInv(this["project"].nameinvalid)
        
        createproject.invalidName()

    })

})