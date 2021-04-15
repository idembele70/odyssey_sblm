// body style :
document.body.style.background = "black";
document.body.style.color = "white";

// Selector
var output = document.getElementById('output');
var child  = output.childNodes[0];
console.log(child);
while (child) {
    output.removeChild(child);

    child = output.firstChild;
}

