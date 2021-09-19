const hamMenu = document.getElementById("hamMenu")
const mobileNav = document.querySelector('#menu')
const buttons = document.querySelectorAll('#menu li')


function toggleMenu(){
    hamMenu.classList.toggle('crossed')
    mobileNav.classList.toggle('show')
}

buttons.forEach((button)=>button.addEventListener("click", hideMenu))


 

function hideMenu() {
    mobileNav.classList.toggle('show')
    hamMenu.classList.toggle('crossed')
}