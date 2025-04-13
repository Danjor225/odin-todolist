import "./reset.css"
import "./styles.css"

import {Item} from "./to-do-item"
import {displayItem} from "./dom-manipulation"

const contentDisplay = document.querySelector('#default-project-container')
var firstTestItem = new Item('Jordan', 'February', 'He is the coolest', 'High', false)
var secondTestItem = new Item('Libbie', 'June', 'She is even cooler', 'Medium', true)

displayItem(firstTestItem, contentDisplay)
displayItem(secondTestItem, contentDisplay)