document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.querySelector(".open-btn");
  const closeButton = document.querySelector(".close-btn");
  const secondPage = document.querySelector(".second-container");

  openButton.addEventListener("click", () => {
    secondPage.classList.add("active");
  });

  closeButton.addEventListener("click", () => {
    secondPage.classList.remove("active");
  });
});
