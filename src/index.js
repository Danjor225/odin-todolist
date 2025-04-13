import "./reset.css"
import "./styles.css"

import {Item} from "./to-do-item"
import {displayItem} from "./dom-manipulation"

const contentDisplay = document.querySelector('#default-project-container')
var headerItem = new Item('Title', 'Due Date', 'Description', 'Priority', false)
var firstTestItem = new Item('Jordan id the very coolest person that has ever lived. Worship him always!', new Date('March 25, 98'), 'He is the coolest', 'High', false)
var secondTestItem = new Item('Libbie', new Date('June 20, 00'), 'She is even cooler', 'Medium', true)

displayItem(headerItem, contentDisplay)
displayItem(firstTestItem, contentDisplay)
displayItem(secondTestItem, contentDisplay)