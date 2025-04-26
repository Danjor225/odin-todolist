
import { domDisplay } from "../dom-display";
import {Projects, addToProjectsList, getProjectsList} from "./projects";
import {Item, createNewItem} from "./to-do-item"

const contentDisplay = document.querySelector('#content')
const newProjectDialog = document.querySelector('#add-project-dialog')
const addItemDialog = document.querySelector('#add-item-dialog')
const menuDialog = document.querySelector('#menu-dialog')
let currentOpenProject

let headerItem = new Item('Title', 'Due Date', 'Description', 'Priority', false)
let firstTestItem = new Item('Jordan id the very coolest person that has ever lived. Worship him always!', new Date('March 25, 98'), 'He is the coolest', 'High', false)
let secondTestItem = new Item('Libbie', new Date('June 20, 00'), 'She is even cooler', 'Medium', true)

let startingItemsArray = [headerItem, firstTestItem, secondTestItem]

let defaultProjectList = new Projects('Default Project Page','Default page for all to do list items', startingItemsArray)
addToProjectsList(defaultProjectList)
displayHomePage()



function displayHomePage(){
    currentOpenProject = defaultProjectList
    displayToDoListPage()
}

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
function displayToDoListPage(){
    clearContent(contentDisplay)
    let containerForToDoList = createToDoListPage(currentOpenProject.projectName, contentDisplay)
    displayAllItemsInProject(currentOpenProject.getToDoListItems(), containerForToDoList)
    menuDialog.close()
    addItemButton(containerForToDoList)
}

function addItemButton(container){
    let addItemButton = document.createElement('button')
    addItemButton.textContent = 'ADD NEW ITEM'
    container.appendChild(addItemButton)

    addItemButton.addEventListener('click', ()=>{
        addItemDialog.showModal()
    })

}

function displayProjectPage(){
    clearContent(contentDisplay)
    let containerForToDoList = createProjectsPage(contentDisplay)
    displayAllProjects(getProjectsList(), containerForToDoList)
    menuDialog.close()
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
            currentOpenProject = project
            displayToDoListPage()
        })
        container.appendChild(projectContainer)
    })

    displayAddProjectButton(container)
}


function displayAddProjectButton(container){
        
    let addProjectButton = document.createElement('button')
    addProjectButton.textContent = 'ADD NEW PROJECT'
    container.appendChild(addProjectButton)

    addProjectButton.addEventListener('click', ()=>{
        newProjectDialog.showModal()
    })
}


const submitItemButton = document.querySelector('#add-item-btn')
const cancelItemButton = document.querySelector('#cancel-item-btn')

submitItemButton.addEventListener('click', (e)=> {
   let newItem = createNewItem(e)
    currentOpenProject.addItemProjects(newItem)
    displayToDoListPage()
    addItemDialog.close()
})

cancelItemButton.addEventListener('click', (event)=> {
    event.preventDefault()
    addItemDialog.close()
})


export{displayHomePage, displayProjectPage}