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



export {Item}