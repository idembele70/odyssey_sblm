// body style :
document.body.style.background = "black";
document.body.style.color = "white";

// Selector

// events 
const output = document.getElementById('output');
const button = output.children[0];
function diClick(){
    alert('Ceci est une alerte')
}
const buttonClone = button.cloneNode(true);
console.log(buttonClone);
output.appendChild(buttonClone)
button.addEventListener('click', diClick)
// button.removeEventListener('click',diClick)