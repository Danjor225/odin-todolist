
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

function clearContent(container){
    container.innerHTML = ""

}

function displayAllItemsInProject(projectToDisplay, container){
    projectToDisplay.forEach(item => {
        domDisplay.displayItem(item, container)
    });
}





export{displayAllItemsInProject, createHomePage, clearContent}