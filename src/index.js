import "./reset.css"
import "./styles.css"

import {Item} from "./to-do-item"
import {displayAllItemsInProject, createToDoListPage, clearContent, createProjectsPage, displayAllProjects} from "./dom-manipulation"
import {Projects, addToProjectsList, getProjectsList} from "./projects"

const contentDisplay = document.querySelector('#content')
const menuDialog = document.querySelector('#menu-dialog')
const menuBtn = document.querySelector('#menu-btn')
const homeBtn = document.querySelector('#home-page-btn')
const projectBtn = document.querySelector('#project-page-btn')
const aboutBtn = document.querySelector('#about-page-btn')

let headerItem = new Item('Title', 'Due Date', 'Description', 'Priority', false)
let firstTestItem = new Item('Jordan id the very coolest person that has ever lived. Worship him always!', new Date('March 25, 98'), 'He is the coolest', 'High', false)
let secondTestItem = new Item('Libbie', new Date('June 20, 00'), 'She is even cooler', 'Medium', true)

let startingItemsArray = [headerItem, firstTestItem, secondTestItem]

let defaultProjectList = new Projects('Default Project Page','Default page for all to do list items', startingItemsArray)
addToProjectsList(defaultProjectList)



menuBtn.addEventListener('click', (event)=> {
    if(event.target != menuBtn){
        return
    }
    menuDialog.open ? menuDialog.close() : menuDialog.show()
})


homeBtn.addEventListener('click', () => {
    
    clearContent(contentDisplay)
    let containerForToDoList = createToDoListPage('Default Home Page', contentDisplay)
    displayAllItemsInProject(defaultProjectList.getToDoListItems(), containerForToDoList)
    menuDialog.close()
})

projectBtn.addEventListener('click', ()=>{
    clearContent(contentDisplay)
    let containerForToDoList = createProjectsPage(contentDisplay)
    displayAllProjects(getProjectsList(), containerForToDoList)
    menuDialog.close()
})

aboutBtn.addEventListener('click', ()=>{

    menuDialog.close()
}) 