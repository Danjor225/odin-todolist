
import { domDisplay } from "../dom-display";
const contentDisplay = document.querySelector('#content')

function createToDoListPage(title, container){
    let homePageDiv = document.createElement('div')
    homePageDiv.setAttribute('id', 'homepage')

    let titleDiv = document.createElement('div')
    titleDiv.textContent = title
    titleDiv.classList.add('title')
    homePageDiv.appendChild(titleDiv)

    let defaultProjectDiv = document.createElement('div')
    defaultProjectDiv.setAttribute('id', 'default-project-container')
    homePageDiv.appendChild(defaultProjectDiv)

    container.appendChild(homePageDiv)

    return defaultProjectDiv

}

function createProjectsPage(container){
    let homePageDiv = document.createElement('div')
    homePageDiv.setAttribute('id', 'homepage')

    let titleDiv = document.createElement('div')
    titleDiv.textContent = 'Projects Page'
    titleDiv.classList.add('title')
    homePageDiv.appendChild(titleDiv)

    let projectsDiv = document.createElement('ul')
    projectsDiv.setAttribute('id', 'projects-container')
    homePageDiv.appendChild(projectsDiv)

    container.appendChild(homePageDiv)

    return projectsDiv

}

function clearContent(container){
    container.innerHTML = ""

}

function displayAllItemsInProject(projectToDisplay, container){
    projectToDisplay.forEach(item => {
        domDisplay.displayItem(item, container)
    });
}

function displayAllProjects(projectsList, container){
   

    projectsList.forEach(project => {
        let projectContainer = document.createElement('li')
        projectContainer.classList.add('project')

        let projectIcon = document.createElement('img')
        projectIcon.setAttribute('width', '40')
        projectIcon.setAttribute('height', '40')
       

        projectContainer.appendChild(projectIcon)

        let projectName = document.createElement('div')
        projectName.textContent = project.projectName
        projectContainer.appendChild(projectName)

        let projectDesc = document.createElement('div')
        projectDesc.textContent = project.description
        projectContainer.appendChild(projectDesc)

        projectContainer.addEventListener('click', ()=> {
            clearContent(contentDisplay)
            let containerForToDoList = createToDoListPage(project.projectName, contentDisplay)
            displayAllItemsInProject(project.getToDoListItems(), containerForToDoList)
        })
        container.appendChild(projectContainer)
    })

    displayAddProjectButton(container)
}


function displayAddProjectButton(container){
        
    let addProjectButton = document.createElement('button')
    addProjectButton.textContent = 'ADD NEW PROJECT'
    container.appendChild(addProjectButton)
}




export{displayAllItemsInProject, createToDoListPage, clearContent, createProjectsPage, displayAllProjects}