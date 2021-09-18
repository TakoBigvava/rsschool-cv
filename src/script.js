const hamMenu = document.getElementById("hamMenu")
const mobileNav = document.querySelector('.mobileNav')
const buttons = document.querySelectorAll('.mobileNav li')


function toggleMenu(){
    hamMenu.classList.toggle('crossed')
    mobileNav.classList.toggle('show')
}

buttons.forEach((button)=>button.addEventListener("click", hideMenu))


 

function hideMenu() {
    mobileNav.classList.toggle('show')
    hamMenu.classList.toggle('crossed')
}