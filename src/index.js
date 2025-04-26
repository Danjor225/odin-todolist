import "./reset.css"
import "./styles.css"


import {displayHomePage, displayProjectPage} from "./dom-manipulation"


const menuDialog = document.querySelector('#menu-dialog')
const menuBtn = document.querySelector('#menu-btn')
const homeBtn = document.querySelector('#home-page-btn')
const projectBtn = document.querySelector('#project-page-btn')
const aboutBtn = document.querySelector('#about-page-btn')




menuBtn.addEventListener('click', (event)=> {
    if(event.target != menuBtn){
        return
    }
    menuDialog.open ? menuDialog.close() : menuDialog.show()
})


homeBtn.addEventListener('click', () => {
   
    displayHomePage()
   
})

projectBtn.addEventListener('click', ()=>{
   displayProjectPage()
})

aboutBtn.addEventListener('click', ()=>{

    menuDialog.close()
}) 

