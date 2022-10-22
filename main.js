
const headingMenus = document.querySelectorAll(".clickable-item");
const menu = document.querySelectorAll(".menu");

headingMenus.forEach(x => x.addEventListener("click", function(e) {
    headingMenus.forEach(function(item) {
        if (item !== x) {
             item.nextElementSibling.classList.add("hide"),
             item.lastChild.lastChild.classList.remove("rotate")
        }
               
    })
    if(e.currentTarget.classList.contains("mobile")) {
            e.currentTarget.nextElementSibling.classList.toggle("hide"),
            e.currentTarget.lastChild.lastChild.classList.toggle("rotate")
    } else {
            e.currentTarget.nextElementSibling.classList.toggle("hide"),
            e.currentTarget.lastChild.lastChild.classList.toggle("rotate")    
    }
}))

// MOBILE MENU 
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu-container");
const overlayEffect = document.querySelector(".overlay-effect")

openMenuBtn.addEventListener("click", function(){
    mobileMenu.classList.add("mobile-menu-width"),
    overlayEffect.classList.remove("hide")
})

closeMenuBtn.addEventListener("click", function(){
    mobileMenu.classList.remove("mobile-menu-width"),
    overlayEffect.classList.add("hide")
})



