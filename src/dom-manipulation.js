import {format } from "date-fns";

function createHomePage(container){
    var homePageDiv = document.createElement('div')
    homePageDiv.setAttribute('id', 'homepage')
    var titleDiv = document.createElement('div')
    titleDiv.textContent = 'Default Home Page'
    titleDiv.classList.add('title')
    homePageDiv.appendChild(titleDiv)
    var defaultProjectDiv = document.createElement('div')
    defaultProjectDiv.setAttribute('id', 'default-project-container')
    homePageDiv.appendChild(defaultProjectDiv)

    container.appendChild(homePageDiv)

    return defaultProjectDiv

}

function clearContent(container){
    container.innerHTML = ""

}
function displayItem(item, container){
    var itemContainer = document.createElement('div')
    itemContainer.classList.add('item')
    itemContainer.appendChild(createCompletedBox(item.checked))
    itemContainer.appendChild(createItemTitleDiv(item.title))
    itemContainer.appendChild(createItemDescDiv(item.description))
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

function createItemDescDiv(text){
    var itemTextDiv = document.createElement('div')
    itemTextDiv.classList.add('item-description')
    itemTextDiv.textContent = text
    return itemTextDiv
}

function createDateDueDiv(date){
    var itemDateDiv = document.createElement('div')
    
    itemDateDiv.textContent = !isNaN(date) ? format(date, "yyyy-MM-dd") : date
    // date.getFullYear() + ',' + date.getMonth()
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
    var completedCheckbox = document.createElement('button')
    completedCheckbox.style.backgroundColor = completed ? 'rgb(0,255,0)' : 'rgb(255,0,0)'
    completedCheckbox.textContent = completed ? 'Complete' : 'Incomplete'
    completedCheckbox.addEventListener('click', () => {
        completed = !completed
        completedCheckbox.style.backgroundColor = completed ? 'rgb(0,255,0)' : 'rgb(255,0,0)'
        completedCheckbox.textContent = completed ? 'Complete' : 'Incomplete'
    })
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

export{displayItem, createHomePage, clearContent}