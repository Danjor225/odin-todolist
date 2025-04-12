const contentDisplay = document.querySelector('#content')


function displayItem(item){
    var itemContainer = document.createElement('div')
    itemContainer.appendChild(createItemDiv(item.title))
    itemContainer.appendChild(createItemDiv(item.description))
    itemContainer.appendChild(createItemDiv(item.dueDate))
    itemContainer.appendChild(createPriority(item.priority))
    itemContainer.appendChild(createCompletedBox(item.checked))
    contentDisplay.appendChild(itemContainer)
}

function createItemDiv(text){
    var itemTextDiv = document.createElement('div')
    itemTextDiv.textContent = text
    return itemTextDiv
}



function createPriority(priority){

    var priorityDiv = document.createElement('div')
    priorityDiv.style.backgroundColor = getPriorityColor(priority)
    priorityDiv.textContent = priority
    return priorityDiv

}

function createCompletedBox(completed){
    var completedCheckbox = document.createElement('input')
    completedCheckbox.setAttribute("type", "checkbox")
    completedCheckbox.checked = completed
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

export{displayItem}