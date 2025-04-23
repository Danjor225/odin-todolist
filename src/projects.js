class Projects{
    constructor(projectName, currentToDoItems){

        this.projectName = projectName
        this.currentToDoItems = currentToDoItems
    }

   addItemProjects(itemToAdd){
        this.currentToDoItems.append(itemToAdd)
    }

    getToDoListItems(){
        return this.currentToDoItems
    }

}

var ProjectsList = []

export {Projects , ProjectsList}
