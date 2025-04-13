import "./reset.css"
import "./styles.css"

import {Item} from "./to-do-item"
import {displayItem} from "./dom-manipulation"

const contentDisplay = document.querySelector('#default-project-container')
var headerItem = new Item('Title', 'DueDate', 'Description', 'Priority', false)
var firstTestItem = new Item('Jordan id the very coolest person that has ever lived. Worship him always!', 'February', 'He is the coolest', 'High', false)
var secondTestItem = new Item('Libbie', 'June', 'She is even cooler', 'Medium', true)

displayItem(headerItem, contentDisplay)
displayItem(firstTestItem, contentDisplay)
displayItem(secondTestItem, contentDisplay)