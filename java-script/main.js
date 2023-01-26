const menu_hamburg = document.querySelector(".imgport__hamburg");
const menu = document.querySelector(".menu");
const menu_close = document.querySelector(".menu__close");

menu_hamburg.addEventListener("click",()=>{
    menu.style.right = "0"; 
});

menu_close.addEventListener("click",()=>{
    menu.style.right = "-150px";
});