const crossButton = document.querySelector(".cross-button");
const sideBar = document.querySelector(".side-bar-container");
const menuBar = document.querySelector(".menu");

menuBar.addEventListener("click", function () {
  sideBar.classList.toggle("show-side-bar-container");
});

crossButton.addEventListener("click", function () {
  sideBar.classList.toggle("show-side-bar-container");
});
