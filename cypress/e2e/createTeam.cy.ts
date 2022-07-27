import createteam from "../pages/CreateTeamPage"

describe('create team', ()=>{

    beforeEach(function(){
        cy.fixture('team').then(function (t){
            this["team"] = t
        })
    })

    it('create team', function(){
        createteam.go()
        createteam.fillForm(this["team"].createteam)
        createteam.submit()
        createteam.validCreate()
    })

})