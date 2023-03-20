const button = document.querySelector("#burger-menu_button");
const sideBar = document.querySelector("#menu");
const burgerBtn = document.querySelector("#burger-menu_button");

button.addEventListener("click", open);
sideBar.addEventListener("click", close);

function open(e) {
  e.preventDefault();
  sideBar.classList.toggle("menu__active");
  burgerBtn.classList.toggle("button__active");
  document.body.classList.toggle("noscroll");
}
function close(e) {
  if (e.target.matches('a')) {
    sideBar.classList.remove("menu__active");
    burgerBtn.classList.remove("button__active");
    document.body.classList.remove("noscroll");
  }
}
// ==================================

const toTopBtn = document.querySelector(".back-to-top");

window.onscroll = function () {
  if (window.pageYOffset > 580) {
    toTopBtn.style.bottom = "40px"
  } else {
    toTopBtn.style.bottom = "-40px"
  }
}
// плавний скрол вверх
toTopBtn.addEventListener("click", function () {
  window.scrollBy({
    top: -document.documentElement.scrollHeight
  });
});