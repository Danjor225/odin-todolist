import "./reset.css"
import "./styles.css"

import {Item} from "./to-do-item"
import {displayItem, displayShorterItem} from "./dom-manipulation"

const contentDisplay = document.querySelector('#default-project-container')
var firstTestItem = new Item('Jordan id the very coolest person that has ever lived. Worship him always!', 'February', 'He is the coolest', 'High', false)
var secondTestItem = new Item('Libbie', 'June', 'She is even cooler', 'Medium', true)

displayShorterItem(firstTestItem, contentDisplay)
displayShorterItem(secondTestItem, contentDisplay)