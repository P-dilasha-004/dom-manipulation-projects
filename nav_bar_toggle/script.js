const menuBar = document.querySelector(".menu-bar");
const listItem = document.querySelector(".list-container");

menuBar.addEventListener("click", function () {
  listItem.classList.toggle("show-list-container");
});
