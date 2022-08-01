import deleteproject from  '../pages/ProjectPage'

describe('delete project',()=>{

    it('delete project', ()=>{

        deleteproject.goDelete()
        deleteproject.validDelete()
        
    })
})