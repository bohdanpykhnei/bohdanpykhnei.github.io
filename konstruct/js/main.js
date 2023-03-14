const button = document.querySelector("#burger-menu_button");
const sideBar = document.querySelector("#menu");
const burgerBtn = document.querySelector("#burger-menu_button");
const menuLink = document.querySelector(".menu__list");
const body = document.body;

button.addEventListener("click", buttonHandler);

function buttonHandler(e) {
  e.preventDefault();
  sideBar.classList.toggle("menu__active");
  burgerBtn.classList.toggle("button__active");
  body.classList.toggle("noscroll");
}