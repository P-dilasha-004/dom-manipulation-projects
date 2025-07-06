const count = document.getElementById("count");
const btns = document.querySelectorAll(".btn");

let counter = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      counter--;
    } else if (styles.contains("increase")) {
      counter++;
    } else {
      counter = 0;
    }
    count.textContent = counter;
    colorChanger(counter);
  });
});

function colorChanger(counter) {
  if (counter < 0) {
    count.style.color = "#ff0000";
  } else if (counter > 0) {
    count.style.color = "#008000";
  } else {
    count.style.color = "#6E6A6F";
  }
}
