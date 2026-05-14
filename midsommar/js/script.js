const menu = document.getElementById("side-menu");
const burger = document.querySelector(".hamburger");

burger.addEventListener("click", () => {
    menu.classList.toggle("active");
});
