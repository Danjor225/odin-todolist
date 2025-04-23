
import { domDisplay } from "../dom-display";

function createHomePage(container){
    var homePageDiv = document.createElement('div')
    homePageDiv.setAttribute('id', 'homepage')

    var titleDiv = document.createElement('div')
    titleDiv.textContent = 'Default Home Page'
    titleDiv.classList.add('title')
    homePageDiv.appendChild(titleDiv)

    var defaultProjectDiv = document.createElement('div')
    defaultProjectDiv.setAttribute('id', 'default-project-container')
    homePageDiv.appendChild(defaultProjectDiv)

    container.appendChild(homePageDiv)

    return defaultProjectDiv

}

function createProjectsPage(container){
    var homePageDiv = document.createElement('div')
    homePageDiv.setAttribute('id', 'homepage')

    var titleDiv = document.createElement('div')
    titleDiv.textContent = 'Projects Page'
    titleDiv.classList.add('title')
    homePageDiv.appendChild(titleDiv)

    var defaultProjectDiv = document.createElement('ul')
    defaultProjectDiv.setAttribute('id', 'default-project-container')
    homePageDiv.appendChild(defaultProjectDiv)

    container.appendChild(homePageDiv)

    return defaultProjectDiv

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
    var projectContainer = document.createElement('li')
    projectContainer.classList.add('project')

    projectsList.forEach(project => {
     

        var projectName = document.createElement('div')
        projectName.textContent = project.projectName
        projectContainer.appendChild(projectName)

        var projectDesc = document.createElement('div')
        projectDesc.textContent = project.description
        projectContainer.appendChild(projectDesc)


    })

    container.appendChild(projectContainer)
}



export{displayAllItemsInProject, createHomePage, clearContent, createProjectsPage, displayAllProjects}