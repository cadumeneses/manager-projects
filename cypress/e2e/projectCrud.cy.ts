import projectpage from "../pages/ProjectPage"

describe('crud test project', () => {

    beforeEach(function () {
        cy.fixture('project').then(function (p) {
            this["project"] = p
        })
    })

    it('create project', function () {

        projectpage.go()
        projectpage.fillForm(this["project"].projectpage)
        projectpage.submit()
        projectpage.validCreate()

    })

    it('create project new with invalid name', function () {

        projectpage.go()
        projectpage.fillFormNameInv(this["project"].nameinvalid)
        projectpage.invalidName()

    })

    it('update project', function () {

        projectpage.goUpdate()
        projectpage.fillUpdateForm(this["project"].updateproject)
        projectpage.submit()
        projectpage.validUpdate()

    })

    it('delete project', ()=>{

        projectpage.goDelete()
        projectpage.validDelete()
        
    })

})