const menu_hamburg = document.querySelector(".imgport__hamburg");
const menu = document.querySelector(".menu");
const menu_close = document.querySelector(".menu__close");

menu_hamburg.addEventListener("click",()=>{
    menu.style.transform = "translate(0%)";
    menu.style.display = "block";
});

menu_close.addEventListener("click",()=>{
    
    menu.style.transform = "translate(110%)";
    menu.style.display = "none";
});