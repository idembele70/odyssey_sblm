// body style :
document.body.style.background = "black";
document.body.style.color = "white";

// Selector
const ol = document.querySelector('#output > ol');
const li = ol.children;
for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', (e) => {
        const newValue = prompt("Modifier le text", e.target.textContent)
        e.target.innerHTML =newValue;
    })

}
