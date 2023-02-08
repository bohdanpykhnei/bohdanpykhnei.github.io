const button = document.querySelector("#burger-menu_button");
const sideBar = document.querySelector("#sidebar");
const burgerBtn = document.querySelector("#burger-menu_button");
const body = document.body;

button.addEventListener("click", buttonHandler);

function buttonHandler(e) {
  e.preventDefault();
  sideBar.classList.toggle("sidebar__active");
  burgerBtn.classList.toggle("button_active");
  body.classList.toggle("noscroll");
}
