// body style :
// document.body.style.background = "black";
// document.body.style.color = "white";

// Selector

// events 
const output = document.getElementById('output');

const button = output.querySelector('button');

button.onclick = function(){
   console.log(this.innerHTML = "Vous m'avez cliquer");
}