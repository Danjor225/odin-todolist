import "./reset.css"
import "./styles.css"

import {Item} from "./to-do-item"
import {displayAllItemsInProject, createHomePage, clearContent} from "./dom-manipulation"
import {Projects} from "./projects"

const contentDisplay = document.querySelector('#content')
const menuDialog = document.querySelector('#menu-dialog')
const menuBtn = document.querySelector('#menu-btn')
const homeBtn = document.querySelector('#home-page-btn')
const projectBtn = document.querySelector('#project-page-btn')
const aboutBtn = document.querySelector('#about-page-btn')

var headerItem = new Item('Title', 'Due Date', 'Description', 'Priority', false)
var firstTestItem = new Item('Jordan id the very coolest person that has ever lived. Worship him always!', new Date('March 25, 98'), 'He is the coolest', 'High', false)
var secondTestItem = new Item('Libbie', new Date('June 20, 00'), 'She is even cooler', 'Medium', true)

var startingItemsArray = [headerItem, firstTestItem, secondTestItem]

var defaultProjectList = new Projects('Default Project Page', startingItemsArray)




menuBtn.addEventListener('click', (event)=> {
    if(event.target != menuBtn){
        return
    }
    menuDialog.open ? menuDialog.close() : menuDialog.show()
})


homeBtn.addEventListener('click', () => {
    
    clearContent(contentDisplay)
    var containerForToDoList = createHomePage(contentDisplay)
    displayAllItemsInProject(defaultProjectList.getToDoListItems(), containerForToDoList)
    menuDialog.close()
})

projectBtn.addEventListener('click', ()=>{
    clearContent(contentDisplay)
    menuDialog.close()
})

aboutBtn.addEventListener('click', ()=>{

    menuDialog.close()
}) 