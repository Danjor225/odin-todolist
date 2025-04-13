import "./reset.css"
import "./styles.css"

import {Item} from "./to-do-item"
import {displayItem, createHomePage, clearContent} from "./dom-manipulation"

const contentDisplay = document.querySelector('#content')
const clearBtn = document.querySelector('#clear-btn')
const homeBtn = document.querySelector('#home-page-btn')

var headerItem = new Item('Title', 'Due Date', 'Description', 'Priority', false)
var firstTestItem = new Item('Jordan id the very coolest person that has ever lived. Worship him always!', new Date('March 25, 98'), 'He is the coolest', 'High', false)
var secondTestItem = new Item('Libbie', new Date('June 20, 00'), 'She is even cooler', 'Medium', true)



clearBtn.addEventListener('click', () => {

    clearContent(contentDisplay)
})


homeBtn.addEventListener('click', () => {

    clearContent(contentDisplay)
    var containerForToDoList = createHomePage(contentDisplay)
    displayItem(headerItem, containerForToDoList)
    displayItem(firstTestItem, containerForToDoList)
    displayItem(secondTestItem, containerForToDoList)
})
