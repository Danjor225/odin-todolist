import "./reset.css"
import "./styles.css"

import {Item} from "./to-do-item"
import {displayItem} from "./dom-manipulation"


var firstTestItem = new Item('Jordan', 'February', 'He is the coolest', 'High', false)

displayItem(firstTestItem)