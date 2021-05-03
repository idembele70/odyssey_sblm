// body style :
document.body.style.background = "black";
document.body.style.color = "white";

// Selector
const output = document.querySelector("#output");
const checkbox = output.querySelectorAll("li > input");
const btnUnselect = output.querySelector(".unSelect");

function onSelectAll() {
    checkbox.forEach(el => el.checked = true)
}
btnUnselect.onclick = () =>{
    for (const item of checkbox) {
        item.checked = false;
    }
};