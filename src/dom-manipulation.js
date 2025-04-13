


function displayItem(item, container){
    var itemContainer = document.createElement('div')
    itemContainer.classList.add('item')
    itemContainer.appendChild(createCompletedBox(item.checked))
    itemContainer.appendChild(createItemDiv(item.title))
    itemContainer.appendChild(createItemDiv(item.description))
    itemContainer.appendChild(createItemDiv(item.dueDate))
    itemContainer.appendChild(createPriority(item.priority))
    
    container.appendChild(itemContainer)
}

function displayShorterItem(item, container){
    var itemContainer = document.createElement('div')
    itemContainer.classList.add('item')
    itemContainer.appendChild(createCompletedBox(item.checked))
    itemContainer.appendChild(createItemTitleDiv(item.title))
    itemContainer.appendChild(createDateDueDiv(item.dueDate))
    itemContainer.appendChild(createPriority(item.priority))

    container.appendChild(itemContainer)
}

function createItemTitleDiv(text){
    var itemTextDiv = document.createElement('div')
    itemTextDiv.classList.add('item-title')
    itemTextDiv.textContent = text
    return itemTextDiv
}

function createDateDueDiv(date){
    var itemDateDiv = document.createElement('div')
    itemDateDiv.textContent = date
    return itemDateDiv

}

function createPriority(priority){

    var priorityDiv = document.createElement('div')
    priorityDiv.style.backgroundColor = getPriorityColor(priority)
    priorityDiv.classList.add('priority')
    priorityDiv.textContent = priority
    return priorityDiv

}

function createCompletedBox(completed){
    var completedCheckbox = document.createElement('input')
    completedCheckbox.setAttribute("type", "button")
    completedCheckbox.style.backgroundColor = completed ? 'rgb(0,255,0)' : 'rgb(255,0,0) '
    return completedCheckbox

}



function getPriorityColor(priority){
    if(priority == "High"){
        return 'rgb(0, 128, 0)'
    } else if (priority =='Medium'){
        return 'rgb(255,127,80)'
    } else if (priority == 'Low'){
        return 'rgb(255,0,0)'
    }
}

export{displayItem, displayShorterItem}