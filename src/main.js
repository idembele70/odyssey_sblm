// body style :
document.body.style.color = "white";

// Selector
const output = document.querySelector("#output");

const btnToggle = output.getElementsByClassName("btn-toggle")[0];
const aside = output.getElementsByTagName("aside")[0];
btnToggle.addEventListener(
  "click",
  () => {
    aside.classList.toggle("hide");
  },
  false
);
