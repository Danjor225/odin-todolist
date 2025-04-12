const contentDisplay = document.querySelector('#content')


function displayItem(item){
    var itemContainer = document.createElement('div')
    itemContainer.appendChild(createTitle(item.title))
    itemContainer.appendChild(createTitle(item.description))
    itemContainer.appendChild(createTitle(item.dueDate))
    itemContainer.appendChild(createPriority(item.priority))
    itemContainer.appendChild(createTitle(item.checked))
    contentDisplay.appendChild(itemContainer)
}

function createTitle(title){
    var titleDiv = document.createElement('div')
    titleDiv.textContent = title
    return titleDiv
}

function createDescription(description){
    
}

function createDate(date){

}

function createPriority(priority){

    var priorityDiv = document.createElement('div')
    priorityDiv.style.backgroundColor = getPriorityColor(priority)
    priorityDiv.textContent = priority
    return priorityDiv

}

function createCompleted(isCompleted){

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