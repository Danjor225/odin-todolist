class Projects{
    constructor(projectName, description, currentToDoItems){

        this.projectName = projectName
        this.currentToDoItems = currentToDoItems
        this.description = description
    }

   addItemProjects(itemToAdd){
        this.currentToDoItems.append(itemToAdd)
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

var projectsList = []
  
function addToProjectsList(projectToAdd){
    projectsList.push(projectToAdd)
}

function getProjectsList(){
    return projectsList
}


export {Projects , addToProjectsList, getProjectsList}
