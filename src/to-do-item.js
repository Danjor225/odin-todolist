import {format } from "date-fns";

class Item{
    constructor(title,dueDate,description,priority,checked){
        this.title = title
        this.dueDate = dueDate
        this.description = description
        this.priority = priority
        this.checked = checked
    }

    getItemContent(){
        return [this.title,this.dueDate, this.description,this.priority,this.checked]
    }
}


const addItemForm = document.querySelector('#add-item-form')


function createNewItem(e){
    e.preventDefault()
    let itemTitle = addItemForm.querySelector('#item-title').value
    let itemDueDate  = addItemForm.querySelector('#item-due-date').value
    itemDueDate = format(itemDueDate, "yyyy-MM-dd")
    let itemDescription = addItemForm.querySelector('#item-description').value
    let itemPriority = addItemForm.querySelector('#item-priority')
    itemPriority = itemPriority.options[itemPriority.selectedIndex].text
    let itemCompleted = addItemForm.querySelector('#item-completed').checked
    
    return new Item(itemTitle, itemDueDate, itemDescription, itemPriority, itemCompleted)
}



export {Item, createNewItem}