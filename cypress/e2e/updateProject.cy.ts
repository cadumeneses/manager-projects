import createproject from "../pages/ProjectPage"

describe('update project', ()=>{
    beforeEach(function () {
        cy.fixture('project').then(function (p) {
            this["project"] = p
        })
    })

    it('update project', function () {

        createproject.goUpdate()
        createproject.fillUpdateForm(this["project"].updateproject)
        createproject.submit()
        createproject.validUpdate()
    })
})