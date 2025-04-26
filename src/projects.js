class Projects{
    constructor(projectName, description, currentToDoItems){

        this.projectName = projectName
        this.currentToDoItems = currentToDoItems
        this.description = description
    }

   addItemProjects(itemToAdd){
        this.currentToDoItems.push(itemToAdd)
    }

    getToDoListItems(){
        return this.currentToDoItems
    }

    getCertainAToDoItem(itemNameToReturn){
        this.currentToDoItems.map((item)=>{
            if(item == itemNameToReturn){
                return item
            }
        })
    }

    
}

import { displayProjectPage} from "./dom-manipulation"

const createProjectBtn = document.querySelector('#create-project-btn')
const cancelProjectBtn = document.querySelector('#cancel-project-btn')
const newProjectDialog = document.querySelector('#add-project-dialog')


let projectsList = []
  


function addToProjectsList(projectToAdd){
    projectsList.push(projectToAdd)
}

function getProjectsList(){
    return projectsList
}

createProjectBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    const newProjectTitle = document.querySelector('#project-title')
    const newProjectDescription = document.querySelector('#project-description')

    let newProject = new Projects(newProjectTitle.value, newProjectDescription.value, [])
    addToProjectsList(newProject)
    displayProjectPage()
    newProjectDialog.close()
})

cancelProjectBtn.addEventListener('click', (event)=> {
    event.preventDefault()
    newProjectDialog.close()

})

export {Projects , addToProjectsList, getProjectsList}
