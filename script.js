const openMenu = document.getElementById("Open");
const closeMenu = document.getElementById("Close");
const menuPanel = document.getElementById("Menu");
const shadowEffect = document.getElementById("Shadow");

const showMenu = () => {
    menuPanel.style.transform = "translateX(0px)";
    shadowEffect.style.visibility = "initial";
    shadowEffect.style.opacity = "0.6";
}
const closeMenuPanel = () => {
    menuPanel.style.transform = "translateX(-320px)";
    shadowEffect.style.visibility = "hidden";
    shadowEffect.style.opacity = 0;
}

openMenu.addEventListener("click", showMenu);
closeMenu.addEventListener("click", closeMenuPanel);
shadowEffect.addEventListener("click",closeMenuPanel);